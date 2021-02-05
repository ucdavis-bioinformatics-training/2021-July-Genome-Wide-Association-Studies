---
title: "Single Cell RNAseq Part 1"
author: "Bioinformatics Core"
output:
    html_document:
      keep_md: TRUE
---

# Single Cell Analysis with Seurat and some custom code!

[Seurat](http://satijalab.org/seurat/) is a popular R package that is designed for QC, analysis, and exploration of single cell data. Seurat aims to enable users to identify and interpret sources of heterogeneity from single cell transcriptomic measurements, and to integrate diverse types of single cell data. Further, the authors provide several [tutorials](https://satijalab.org/seurat/vignettes.html), on their website.

The expression_tables_cellrangerV3.zip file contains the single cell matrix files for the three samples. These are isolated mouse cells ran on the 10X genomics platform (3' expression V2) for single cell RNA sequencing, sequenced with UC Davis on 1 HiSeq 4000 lane. The Experiment contains 3 samples, each merged from 2 original samples and then randomly subsamples to 1000 cells each.

The three samples are, Dorsal root ganglion neurons :
At weaning, Ttpa+/+ mice were fed a normal diet (35 mg of dl-α-tocopheryl acetate/kg, vitE+) while and Ttpa-/- mice were fed either an α-TOH-deficient diet (<10 mg of dl-α-tocopheryl acetate/kg, vitE-), or α-TOH-supplemented diet (600 mg of dl-α-tocopheryl acetate/kg, vitE+++) diet.

* UCD_Adj_VitE - normal + Vitamin E
* UCD_Supp_VitE - Vitamin E supplimented by diet.
* UCD_VitE_Def - Vitamin E deficient animals

We start with loading needed libraries for R, at this time all we need is the package [Seurat](http://satijalab.org/seurat/).

```r
library(Seurat)
```

## Load the Cell Ranger Matrix Data and create the base Seurat object.
Cell Ranger provides a function `cellranger aggr` that will combine multiple samples into a single matrix file. However, when processing data in R and Seurat this is unnecessary and we can aggregate them in R.

Seurat provides a function `Read10X` to read in 10X data folder. First we read in data from each individual sample folder. First, we initialize the Seurat object (`CreateSeuratObject`) with the raw (non-normalized data). Keep all genes expressed in >= 10 cells. Keep all cells with at least 200 detected genes. Also extracting sample names, calculating and adding in the metadata mitochondrial percentage of each cell. Adding in the metadata batchid and cell cycle. Finally, saving the raw Seurat object.


```r
dataset_loc <- "./expression_tables_cellrangerV3"
ids <- c("UCD_Adj_VitE", "UCD_Supp_VitE", "UCD_VitE_Def")

d10x.data <- sapply(ids, function(i){
  d10x <- Read10X(file.path(dataset_loc,i,"outs/filtered_feature_bc_matrix"))
  colnames(d10x) <- paste(sapply(strsplit(colnames(d10x),split="-"),'[[',1L),i,sep="-")
  d10x
})

experiment.data <- do.call("cbind", d10x.data)

experiment.aggregate <- CreateSeuratObject(
  experiment.data,
  project = "scRNA workshop",
  min.cells = 10,
  min.features = 200,
  names.field = 2,
  names.delim = "\\-")
```

### The percentage of reads that map to the mitochondrial genome

* Low-quality / dying cells often exhibit extensive mitochondrial contamination.
* We calculate mitochondrial QC metrics with the PercentageFeatureSet function, which calculates the percentage of counts originating from a set of features.
* We use the set of all genes, in mouse these genes can be identified as those that begin with 'mt', in human data they begin with MT.


```r
experiment.aggregate$percent.mito <- PercentageFeatureSet(experiment.aggregate, pattern = "^mt-")
```

### Lets create a fake "batch" metadata (used in part 3), Here we determine UCD_Adj_VitE is from one batch and UCD_Adj_VitE/UCD_Adj_VitE are from a second battch

Here we build a new metadata variable 'batchid' which can be used to specify treatment groups.

```r
samplename = experiment.aggregate$orig.ident

batchid = rep("Batch1",length(samplename))
batchid[samplename %in% c("UCD_Adj_VitE")] = "Batch2"
names(batchid) = colnames(experiment.aggregate)

experiment.aggregate <- AddMetaData(
  object = experiment.aggregate,
  metadata = batchid,
  col.name = "batchid")

table(experiment.aggregate$batchid)
```

```
##
## Batch1 Batch2
##   1992    904
```

### Lets spend a little time getting to know the Seurat object.

The Seurat object is the center of each single cell analysis. It stores __all__ information associated with the dataset, including data, annotations, analyses, etc. The R function slotNames can be used to view the slot names within an object.


```r
slotNames(experiment.aggregate)
```

```
##  [1] "assays"       "meta.data"    "active.assay" "active.ident" "graphs"      
##  [6] "neighbors"    "reductions"   "project.name" "misc"         "version"     
## [11] "commands"     "tools"
```


```r
head(experiment.aggregate[[]])
```

```
##                                  orig.ident nCount_RNA nFeature_RNA
## ACTCTAATGTGGGTATG-UCD_Adj_VitE UCD_Adj_VitE       8885         2818
## AGGCTGGTCAATCACAC-UCD_Adj_VitE UCD_Adj_VitE       5019         2167
## ATGACTAGCACATGACT-UCD_Adj_VitE UCD_Adj_VitE       2208         1286
## AAGCGTCGTCTCTAAGG-UCD_Adj_VitE UCD_Adj_VitE       2795         1474
## ACATCGGGTCCATGCTC-UCD_Adj_VitE UCD_Adj_VitE       5372         2271
## ATACGGTAGTGACCAAG-UCD_Adj_VitE UCD_Adj_VitE        598          367
##                                percent.mito batchid
## ACTCTAATGTGGGTATG-UCD_Adj_VitE     1.969612  Batch2
## AGGCTGGTCAATCACAC-UCD_Adj_VitE     6.216378  Batch2
## ATGACTAGCACATGACT-UCD_Adj_VitE     6.838768  Batch2
## AAGCGTCGTCTCTAAGG-UCD_Adj_VitE     4.221825  Batch2
## ACATCGGGTCCATGCTC-UCD_Adj_VitE     7.557707  Batch2
## ATACGGTAGTGACCAAG-UCD_Adj_VitE    11.371237  Batch2
```

#### Question(s)

1. What slots are empty, what slots have data?
2. What columns are available in meta.data?
3. Look up the help documentation for subset?

## Finally, save the original object, write out a tab-delimited table that could be read into excel, and view the object.

```r
write.table(as.matrix(experiment.data),"raw.datatable.txt",sep="\t",col.names=T,row.names=T)
experiment.aggregate
```

```
## An object of class Seurat
## 12811 features across 2896 samples within 1 assay
## Active assay: RNA (12811 features, 0 variable features)
```

```r
## Original dataset in Seurat class, with no filtering
save(experiment.aggregate,file="original_seurat_object.RData")
```

## Get the next Rmd file

```r
download.file("https://raw.githubusercontent.com/ucdavis-bioinformatics-training/2020-August-intro-scRNAseq/master/data_analysis/scRNA_Workshop-PART2.Rmd", "scRNA_Workshop-PART2.Rmd")
```

## Session Information

```r
sessionInfo()
```

```
## R version 4.0.0 (2020-04-24)
## Platform: x86_64-apple-darwin17.0 (64-bit)
## Running under: macOS Catalina 10.15.4
##
## Matrix products: default
## BLAS:   /Library/Frameworks/R.framework/Versions/4.0/Resources/lib/libRblas.dylib
## LAPACK: /Library/Frameworks/R.framework/Versions/4.0/Resources/lib/libRlapack.dylib
##
## locale:
## [1] en_US.UTF-8/en_US.UTF-8/en_US.UTF-8/C/en_US.UTF-8/en_US.UTF-8
##
## attached base packages:
## [1] stats     graphics  grDevices datasets  utils     methods   base     
##
## other attached packages:
## [1] Seurat_3.1.5
##
## loaded via a namespace (and not attached):
##  [1] httr_1.4.1          tidyr_1.0.3         jsonlite_1.6.1     
##  [4] viridisLite_0.3.0   splines_4.0.0       leiden_0.3.3       
##  [7] assertthat_0.2.1    BiocManager_1.30.10 renv_0.10.0        
## [10] yaml_2.2.1          ggrepel_0.8.2       globals_0.12.5     
## [13] pillar_1.4.4        lattice_0.20-41     glue_1.4.1         
## [16] reticulate_1.15     digest_0.6.25       RColorBrewer_1.1-2
## [19] colorspace_1.4-1    cowplot_1.0.0       htmltools_0.4.0    
## [22] Matrix_1.2-18       plyr_1.8.6          pkgconfig_2.0.3    
## [25] tsne_0.1-3          listenv_0.8.0       purrr_0.3.4        
## [28] patchwork_1.0.0     scales_1.1.1        RANN_2.6.1         
## [31] Rtsne_0.15          tibble_3.0.1        ggplot2_3.3.0      
## [34] ellipsis_0.3.1      ROCR_1.0-11         pbapply_1.4-2      
## [37] lazyeval_0.2.2      survival_3.1-12     magrittr_1.5       
## [40] crayon_1.3.4        evaluate_0.14       future_1.17.0      
## [43] nlme_3.1-147        MASS_7.3-51.5       ica_1.0-2          
## [46] tools_4.0.0         fitdistrplus_1.1-1  data.table_1.12.8  
## [49] lifecycle_0.2.0     stringr_1.4.0       plotly_4.9.2.1     
## [52] munsell_0.5.0       cluster_2.1.0       irlba_2.3.3        
## [55] compiler_4.0.0      rsvd_1.0.3          rlang_0.4.6        
## [58] grid_4.0.0          ggridges_0.5.2      RcppAnnoy_0.0.16   
## [61] htmlwidgets_1.5.1   igraph_1.2.5        rmarkdown_2.1      
## [64] gtable_0.3.0        codetools_0.2-16    reshape2_1.4.4     
## [67] R6_2.4.1            gridExtra_2.3       zoo_1.8-8          
## [70] knitr_1.28          dplyr_0.8.5         uwot_0.1.8         
## [73] future.apply_1.5.0  KernSmooth_2.23-16  ape_5.3            
## [76] stringi_1.4.6       parallel_4.0.0      Rcpp_1.0.4.6       
## [79] vctrs_0.3.0         sctransform_0.2.1   png_0.1-7          
## [82] tidyselect_1.1.0    xfun_0.13           lmtest_0.9-37
```
