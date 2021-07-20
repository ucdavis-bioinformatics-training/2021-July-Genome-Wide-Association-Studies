# Variant Discovery using GATK
-------------------------------------------------------

<img src="preproc_mm_figures/WF3.png" alt="analysis_flowchart" width="60%"/>

1. Variant analysis tools
1. Using GATK

---

## Variant analysis tools

There are many variant analysis tools available publicly, for different variant types, as well as using different approaches. Variant analysis tools are designed based on what sequencing data is available. Some of them do have modules available for multiple data types, such as DeepVariant. Even when we focus on the short read Illumina data, there are many tools available. Only seleted a few are listed below for demonstration purpose.

* Small/short variants (SNPs + Indels)
  * GATK
  * DeepVariant
  * DRAGEN
  * Freebayes
* Copy number variations
  * GATK
  * CNVnator
* Structure variants
  * GATK (beta)
  * DELLY
  * Lumpy
  
---

## Variant discovery using GATK

In this section, we are going to use GATK to call short variants (SNPs + Indels) using GATK.

<p align = "center">
<img src="gatk_figures/WF1.png" alt="analysis_flowchart" width="60%"/>
</p>

<p align = "center" style="font-family:Times;font-size:15px;">
https://gatk.broadinstitute.org/hc/en-us/articles/360035535932-Germline-short-variant-discovery-SNPs-Indels-
</p>

---

1. Mark duplicates
1. Base quality score recalibration
1. Call variants per-sample
1. Joint-call variants
1. Variant score recalibration

----------------------------------------

### Mark duplicates

This step is optional if you have done deduplication in read preprocessing step, as we have done using hts_SuperDeduper. The steps below serves as a helper if you need it in your own data analysis, where you do not do deduplication in the data preprocessing step. 

    cd /share/workshop/gwas_workshop/$USER/gwas_example  
    wget https://ucdavis-bioinformatics-training.github.io/2021-July-Genome-Wide-Association-Studies/software_scripts/scripts/picard.slurm  


You will have to modify the slurm script to fit your need.

---

### Base quality score recalibration (BQSR)

Let's recall what base quality scores are. They are per-base estimates of error emitted by the sequencing machines. They express how confident the machine was that it called the correct base each time. The algorithm used to calculate the quality scores is a black box to any sequencing customers. The scores produced by the sequencing machines are subject to various sources of systematic technical error, leading to inaccurate base quality scores in the data.

Variant calling algorithms rely heavily on the base quality scores to provide evidence in determining whether a variant observed is the biological truth or just sequencing error. BQSR applies machine learning technique to model these errors empirically and adjust the quality scores accordingly. Several covariates are modeled in an additive way in this process, including mainly sequence context and position in read, or cycle.

The aim of this step is to detect systematic errors made by the sequencer when estimating the quality score of each base call and correct them. More accurate base qualities will in turn improve the accuracy of the variant calls.


<p align = "center">
<img src="gatk_figures/BQSR1.png" alt="BQSR_1" width="80%"/>
</p>

<p align = "center">
<img src="gatk_figures/BQSR2.png" alt="BQSR_2" width="80%"/>
</p>

<p align = "center">
<img src="gatk_figures/BQSR3.png" alt="BQSR_3" width="80%"/>
</p>

<p align = "center">
<img src="gatk_figures/BQSR4.png" alt="BQSR_4" width="80%"/>
</p>

<p align = "center" style="font-family:Times;font-size:15px;">
https://gatk.broadinstitute.org/hc/en-us/articles/360035890531-Base-Quality-Score-Recalibration-BQSR-
</p>


This step involves two operations: first is to model the base quality scores and calculate the necessary correction (BaseRecalibrator); the second is to apply the correction (ApplyBQSR). The script for this step is [gatk_bqsr.slurm](https://ucdavis-bioinformatics-training.github.io/2021-July-Genome-Wide-Association-Studies/software_scripts/scripts/gatk_bqsr.slurm).

First, we have to download a few vcf files from [GATK google cloud space](https://console.cloud.google.com/storage/browser/genomics-public-data/resources/broad/hg38/v0;tab=objects?pli=1&prefix=&forceOnObjectsSortingFiltering=false). These will be used for training the machine learning processes necessary during the variant discorey. We are not going to actually download any of them, as some of them will take a long time to download. I have downloaded them and you can create soft links to them for this workshop.

    cd /share/workshop/gwas_workshop/$USER/gwas_example/References
    ln -s /share/workshop/gwas_workshop/jli/gwas_example/References/1000G_omni2.5.hg38.vcf* .
    ln -s /share/workshop/gwas_workshop/jli/gwas_example/References/1000G_phase1.snps.high_confidence.hg38.vcf* .
    ln -s /share/workshop/gwas_workshop/jli/gwas_example/References/hapmap_3.3.hg38.vcf* .
    ln -s /share/workshop/gwas_workshop/jli/gwas_example/References/Homo_sapiens_assembly38.dbsnp138.vcf* .
    ln -s /share/workshop/gwas_workshop/jli/gwas_example/References/Mills_and_1000G_gold_standard.indels.hg38.vcf* .

These files are very valuable resources for GATK analysis for human. They include known sites, training sets and truth sets. 

**Know sites** is a list of variants that have been previously identified and reported, such as dbSNP. This list typically does not imply any level of systematic curation or cross-validation. Tools that take these data as input do not assume that the variant calls in the list are all true. One could _bootstrap_ a list of known sites by a first round of variant calling without BQSR or VQSR.

**Training sets** is a list of variants that is used by machine learning algoriths to model the properties of true variation vs. artifacts. This requires a higher standard of curation and validation. Tools take this data as input typically accept a parameter that indicates your degree of confidence in the resource. This set is difficult to bootstrap, as it benefits greatly from orthogonal valication.

**Truth sets** is a list of variants that is used to evaluate the quality of a variant callset (eg. sensitivity and specificity, or recall). This requires the highest standard of validation. Tools take this data as input assume that all variants in the set are true variation. This set cannot be bootstrapped and must be generated using orthogonal validation methods.


Now, let's get the script for base quality score recalibration, look at it to understand what it does and run it.

    cd /share/workshop/gwas_workshop/$USER/gwas_example
    wget https://ucdavis-bioinformatics-training.github.io/2021-July-Genome-Wide-Association-Studies/software_scripts/scripts/gatk_bqsr.slurm
    cat gatk_bqsr.slurm
    sbatch -J bqsr.${USER} gatk_bqsr.slurm


**The base quality recalibration works better when the number of mapped bases are large enough and will not work well on a small number of aligned reads. 1B bases produces significantly better results.**

---

### Calling variants (HaplotypeCaller)

<p align = "center">
<img src="gatk_figures/HC1.png" alt="HaplotypeCaller_overview" width="60%"/>
</p>

<p align = "center" style="font-family:Times;font-size:15px;">
https://gatk.broadinstitute.org/hc/en-us/articles/360035531412-HaplotypeCaller-in-a-nutshell
</p>


Four steps involved in this process:

  * Define active regions
    Travers the sequencing data to identify regions that show variation beyond the expected background noise. These active regions are passed to the next step for analysis.
  * Determine haplotypes by local assembly of the active region
    Construct the complete sequences covering the entire length of a actove region using a local assembly, which is called haplotypes. This process typically generate several different possible haplotypes for each active region. These haplotypes are realigned to the reference to identify potential variant sites.
  * Evaluating the evidence for haplotypes and variant alleles
    This step takes into account the quality of the data (the base quality scores and indel quality scores). A score is produced to express the likelihood of observing a read from a haplotype.
  * Assigning per-sample genotypes
    Using the likelihood scores calculated in the previous step and Bayes' theorem to calculate the likelihoods of each possible genotype. The degree of confidene in a genotype depends on both the quality and the quantity of the available data. Low coverage and low quality will both lead to lower confidence calls. Only the reads that safisfy certain mapping quality thresholds and the bases that satisfy certain base quality thresholds will be used: 20.


