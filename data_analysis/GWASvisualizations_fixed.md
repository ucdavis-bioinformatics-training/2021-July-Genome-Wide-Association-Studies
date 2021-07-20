---
title: "GWAS Visualization in R"
author: "Keith Mitchel, UC Davis Bioinformatics Core"
date: "7/7/2021"
output:
  pdf_document:
    toc: yes
    keep_tex: yes
  html_document: default
  word_document: default
---

# We will need to get the tdt results for the data
```{bash, include=F, eval=FALSE, engine="sh"}
user="keithgmitchell"
scp ${user}@tadpole.genomecenter.ucdavis.edu:/share/workshop/gwas_workshop/${user}/plink/tdtfrq.csv  .
scp ${user}@tadpole.genomecenter.ucdavis.edu:/share/workshop/gwas_workshop/${user}/plink/tdtadj.csv  .

<div class='r_output'>

```{r setup, include=FALSE}
#rmarkdown::render("GWASvisualizations.Rmd", clean = FALSE)
</div>
# TODO auto install chunk? Not sure I remember how we do this
- explain packages as well.
```{r}
#install.packages("qqman")
#install.packages("CMplot")
<div class='r_output'>
```{r}
library(qqman)
library(dplyr)
</div>
For a comparison, a sample dataset is provided in order to show what all chromosomes would look like. We will create some visualization with this as well. 
```{r}
head(gwasResults)
<div class='r_output'>

Lets read in the TDT results
- The adjusted file is a bit smaller here since the NA values cannot be adjusted and are ommitted. So lets merge and only keep values that exist in the adjusted file, but lets add the frequency or MAF
```{r}
tdtfrq <- read.csv("../tdtfrq.csv")
head(tdtfrq)
</div>
```{r}
tdtadj <- read.csv("../tdtadj.csv", row.names=NULL)
head(tdtadj)
<div class='r_output'>Lets merge our frequences with the TDT results. 
```{r}
cleantdt <- merge(tdtfrq , tdtadj, by=c("CHR","SNP"))
head(cleantdt)
</div>
Lets read in the annotation information
```{r}
anno <- read.csv('~/Downloads/query.output.genome_summary.csv')
head(anno)
<div class='r_output'>
There seem to be some NA values produced by plink for TDT.. why might this be?
```{r}
final <- merge(cleantdt, anno, by.x=c("CHR","SNP"), by.y=c("Chr", "Start"))
head(final)
</div>Make the Manhattan plot on the final dataset
Make the Manhattan plot on the gwasResults dataset
```{r}
manhattan(final, chr="CHR", bp="SNP", snp="dbSNP", p="UNADJ" )
manhattan(gwasResults)
<div class='r_output'>
A list of SNP of interest is provided with the library:
Let's highlight them, with a bit of customization on the plot
```{r}
manhattan(final,  chr="CHR", bp="SNP", snp="dbSNP", p="UNADJ", highlight = c("rs370508396"))
</div>
```{r}
manhattan(final,  chr="CHR", bp="SNP", snp="dbSNP", p="UNADJ", annotatePval = 0.5)
manhattan(gwasResults, annotatePval = 0.05)
<div class='r_output'>
 qqplot It is a good practice to draw a qqplot from the output of a GWAS. It allows to compare the distribution of the pvalue with an expected distribution by chance. Its realisation is straightforward thanks to the qq function:

```{r}
qq(final$UNADJ)
</div>

We have tons of other metadata, what else would be interesting to explore?


## circular version with CMplot
The CMplot library by Lilin Yin is a good choice if you want to make a circular version of your manhattanplot. I believe than doing a circular version makes sense: it gives less space to all the non significant SNPs that do not interest us, and gives more space for the significant association. Moreover, the CMplot makes their realization straightforward.

```{r}
library("CMplot")
CMplot(gwasResults, plot.type="c", r=1.6, cir.legend=TRUE,
        outward=TRUE, cir.legend.col="black", cir.chr.h=.1 ,chr.den.col="orange", file="jpg",
        memo="", dpi=300, chr.labels=seq(1,22))
<div class='r_output'>

![](../Circular-Manhattan.P.jpg)

