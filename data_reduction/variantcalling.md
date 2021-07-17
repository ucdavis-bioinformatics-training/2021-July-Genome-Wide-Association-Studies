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

---


### Mark duplicates

This step is optional if you have done deduplication in read preprocessing step, as we have done using hts_SuperDeduper. The steps below serves as a helper if you need it in your own data analysis, where you do not do deduplication in the data preprocessing step. 


   cd /share/workshop/gwas_workshop/$USER/gwas_example  
   wget https://ucdavis-bioinformatics-training.github.io/2021-July-Genome-Wide-Association-Studies/software_scripts/scripts/picard.slurm  


You will have to modify the slurm script to fit your need.

---

## Base quality score recalibration (BQSR)

Let's recall what base quality scores are. They are per-base estimates of error emitted by the sequencing machines. They express how confident the machine was that it called the correct base each time. The algorithm used to calculate the quality scores is a black box to any sequencing customers. The scores produced by the sequencing machines are subject to various sources of systematic technical error, leading to inaccurate base quality scores in the data.

Variant calling algorithms rely heavily on the base quality scores to provide evidence in determining whether a variant observed is the biological truth or just sequencing error. BQSR applies machine learning technique to model these errors empirically and adjust the quality scores accordingly. Several covariates are modeled in an additive way in this process, including mainly sequence context and position in read, or cycle.

The aim of this step is to detect systematic errors made by the sequencer when estimating the quality score of each base call. More accurate base qualities will in turn improve the accuracy of the variant calls.


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

   

**Assembly** seeks to put together the puzzle without knowing what the picture is.

- The focus is on the pieces, how they fit together.

**Mapping** (or alignment to a reference) tries to put together the puzzle pieces directly onto an image of the picture.
- The focus is on the puzzle, regions of the puzzle that contain certain characteristics (ex. what background) that will help you place the piece onto the puzzle.
- In mapping the question is more, given a small chunk of sequence, where in the genome did this sequence most likely come from.
- The goal then is to find the match(es) with either the “best” edit distance (smallest difference), or all matches with edit distance less than max edit distance. Main issues are:
* Large search space
* Regions of similarity (aka repeats)
* Gaps (INDELS)
* Complexity (RNA, splicing, transcripts)

### Alignment concepts

* Multimappers:
  * Reads that align equally well to more than one reference location.
  * Generally, multimappers are discounted in variant detection, and are often discounted in counting applications (like RNA-Seq ... would “cancel” out anyway).
  * Note: multimapper “rescue” in some algorithms (RSEM, Express?).
* Duplicates:
  * Reads or read pairs arising from the same original library fragment, during library preparation (PCR duplicates).
  * Generally, duplicates can only be detected reliably with paired-end sequencing. If PE, they’re discounted in variant detection, and discounted in counting applications (like RNA-Seq).
* Clipping vs Splicing
  * soft-clipped: bases in 5' and 3' of the read are NOT part of the alignment.
  * hard-clipped: bases in 5' and 3' of the read are NOT part of the alignment AND those bases have been
  removed from the read sequence in the BAM file. The 'real' sequence length would be length(SEQ)+ count-of-hard-clipped-bases
  * [From biostars](https://www.biostars.org/p/119537/)

<img style="padding-left:100px" src="alignment_mm_figures/alignment_figure3.png" alt="alignment_figure3" width="60%"/>

* Inner length, insert size, fragment length

<img src="alignment_mm_figures/alignment_figure4.jpg" alt="alignment_figure4" width="60%"/>

*From [This Biostars answer](https://www.biostars.org/p/106291/)*

#### Considerations when mapping
* Placing reads in regions that do not exist in the reference genome (reads extend off the end of linearized fragments) [ mitochondrial, plasmids, structural variants, etc.].
* Sequencing errors and genetic variation: alignment between read and true source in genome may have more differences than alignment with some other copy of repeat.
* What if the closest fully sequenced genome is too divergent?
* Placing reads in repetitive regions: Some algorithms only return 1 mapping; If multiple: map quality = 0
* Algorithms that use paired-end information => might prefer correct distance over correct alignment.

---
## Aligners/Mappers
Many [alignment algorithms](https://en.wikipedia.org/wiki/List_of_sequence_alignment_software
) to choose from. Examples include:
* Aligners that can ’clip’
  * bwa-mem
  * Bowtie2 in local mode
* Spliced Aligners
  * STAR
  * HiSAT2 (formerly Tophat [Bowtie2])
  * GMAP/GSNAP
  * SOAPsplice
  * MapSplice

---

## Alignments

### Reference genome

Genome sequence fasta file should be identified at the beginning of the analysis.

* Genome fasta files should include all chromosomes, unplaced sequences and un-localized sequences, as well as any organelles: primary assembly.

* Should contain any contigs that represent patches.

* Pseudoautosomal regions masked.

* For variant calling purpose, a decoy sequence set could be added to improve mapping quality. The decoy sequences contain known true human sequences that are not in the reference genome. It will help to reduce the number of reads that would otherwise map with low quality in the reference. 

* Alternative haplotype contigs should not be included in the reference, unless a ALT-aware mapper is used.

[here](https://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/000/001/405/GCA_000001405.28_GRCh38.p13/GRCh38_major_release_seqs_for_alignment_pipelines/) is where one can find the proper version of human reference genome.

---

In this workshop, we are going to only use human chr22 as the reference and do not worry about the unplace, un-localized, alt or decoy sequences. This also reduces the size of our dataset so that the steps will finish relatively quickly.

**1.** First go to your gwas_example directory and make sure that a direcoty called "References" is created

    cd /share/workshop/gwas_workshop/$USER/gwas_example  
    mkdir -p References  
    cd References  

Link to the chr22.fa file that I created:

    ln -s /share/workshop/gwas_workshop/jli/gwas_example/References/chr22.fa .
    ls -lh

**2.** Once we have the reference genome, the first thing to do is to index it for the mapper/aligner

    cd /share/workshop/gwas_workshop/$USER/gwas_example/References
    module load bwa

Index the reference:

    bwa index chr22.fa

This will produce 5 files in the reference directory that BWA will use during the alignment phase.

---

### Carry out alignment

**1.** Now, we are going to go through the alignment steps for one sample (SL378587). We will create a test directory for this purpose.

    cd /share/workshop/gwas_workshop/$USER/gwas_example
    mkdir -p BWA_testing
    cd BWA_testing

We will be using the 'mem' algorithm under BWA to carry out the alignments. First, let's take a look at the help manual:

    bwa mem --help
    
Note that the Usage shows that we need to give bwa a location for the 'idxbase', which is the path to the reference. Now, we will align the two paired-end files and redirect the alignment output (in SAM format) to a file. We will use 2 threads (processors) and add read group (i.e sample ID) information to the alignment:

    bwa mem -t 2 -M -R "@RG\tID:SL378587\tSM:SL378587" ../References/chr22.fa ../01-HTS_Preproc/SL378587/SL378587.htstream_R1.fastq.gz ../01-HTS_Preproc/SL378587/SL378587.htstream_R2.fastq.gz > SL378587.sam

This step will take a minute to run.

---

**2\.** Then, we need to convert the sam files into bam files for downstream processing. We will use a tool called 'samtools' to do this. Load the samtools module and take a look at the various subcommands and options:

    module load samtools
    samtools
    samtools view

We will use 'samtools view' to convert the sam files into a bam files (binary sam)... using 2 threads and the '-b' flag to output bam format:

    samtools view -@ 2 -b -o SL378587.bam SL378587.sam

Sort the alignment for indexing:

    samtools sort -@ 2 -o SL378587.sorted.bam SL378587.bam

---

**3\.** Index the final alignment file. This will allow downstream programs to easily read data from the bam file:

    samtools index SL378587.sorted.bam

You can also use 'samtools flagstat' to get a summary of the alignment:

    samtools flagstat SL378587.sorted.bam

<div class="output">30482 + 0 in total (QC-passed reads + QC-failed reads)
152 + 0 secondary
0 + 0 supplementary
0 + 0 duplicates
30482 + 0 mapped (100.00% : N/A)
30330 + 0 paired in sequencing
15165 + 0 read1
15165 + 0 read2
30240 + 0 properly paired (99.70% : N/A)
30330 + 0 with itself and mate mapped
0 + 0 singletons (0.00% : N/A)
0 + 0 with mate mapped to a different chr
0 + 0 with mate mapped to a different chr (mapQ>=5)
</div>


---

**4\.** In the next step, we will use another Slurm script to run all the alignment commands on all of the samples. First download the script:

    wget https://ucdavis-bioinformatics-training.github.io/2021-July-Genome-Wide-Association-Studies/software_scripts/scripts/bwa.slurm

Take a look at it and understand what it's doing:

    cat bwa.slurm

<div class="output">#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=8
#SBATCH --time=60:00
#SBATCH --mem=4000 # Memory pool for all cores (see also --mem-per-cpu)
#SBATCH --partition=production
#SBATCH --array=1-3
#SBATCH --output=slurmout/bwa_%A_%a.out # File to which STDOUT will be written
#SBATCH --error=slurmout/bwa_%A_%a.err # File to which STDERR will be written

start=`date +%s`
echo $HOSTNAME
echo "My SLURM_ARRAY_TASK_ID: " $SLURM_ARRAY_TASK_ID
aklog

sample=`sed "${SLURM_ARRAY_TASK_ID}q;d" samples.txt`
echo "SAMPLE: ${sample}"

outpath="/share/workshop/gwas_workshop/$USER/gwas_example/03-BWA"
echo "OUTPUT DIR: ${outpath}"
[[ -d ${outpath} ]] || mkdir -p ${outpath}
[[ -d ${outpath}/${sample} ]] || mkdir -p ${outpath}/${sample}


module load bwa
module load samtools

call="bwa mem -t 4 -R '@RG\tID:'${sample}'\tSM:'${sample} -M References/chr22.fa \
	01-HTS_Preproc/${sample}/${sample}.htstream_R1.fastq.gz \
	01-HTS_Preproc/${sample}/${sample}.htstream_R2.fastq.gz | \
	samtools view -bh -@ 2 -m 3G - | \
	samtools sort -@ 2 -m 3G -O bam -o ${outpath}/${sample}/${sample}.sorted.bam - "

echo $call
#eval $call

call="samtools flagstat ${outpath}/${sample}/${sample}.sorted.bam > ${outpath}/${sample}/${sample}_flagstat.log"

echo $call
eval $call

end=`date +%s`
runtime=$((end-start))
echo $runtime
</div>


Once we have understood what the script is doing, we can submit it to the cluster for computing:

    sbatch -J bwa.${USER} bwa.slurm

This should take less than 10 minutes to run. Use 'squeue' to check on your processes:

    squeue -u $USER

---

**5\.** Once this is done, let's take a look at the alignments using IGV. In order to do that, you will have to download the reference and alignment files to our local machine.

First, we have to index the fasta file for IGV. The following command accomplish that.

    cd /share/workshop/gwas_workshop/$USER/gwas_example/References
    samtools faidx chr22.fa

Now we need to transfer the reference fasta, together with its index file and the bam files to our local computer.

**For those who use Mac, a linux machine or Windows Power Shell, you may open a new terminal windown and use the following scp command to download the files. Do remember to change the _user.name_ to your user name on tadpole.**

    scp user.name@tadpole.genomecenter.ucdavis.edu:/share/workshop/gwas_workshop/$USER/gwas_example/References/chr22.fa .
    scp user.name@tadpole.genomecenter.ucdavis.edu:/share/workshop/gwas_workshop/$USER/gwas_example/References/chr22.fa.fai .
    scp user.name@tadpole.genomecenter.ucdavis.edu:/share/workshop/gwas_workshop/$USER/gwas_example/03-BWA/*/*.sorted.bam* .
    pwd

**For others, you may download [Filezilla](https://filezilla-project.org/), install it and then use it to transfer the files.**

---

**6\.** It is very convenient to use the [IGV Web app](https://igv.org/app/) to visualize the alignment.

IGV should start up automatically. The first thing we want to do is load our reference (chr22.fa). Click on "Genome" in the menu and choose "Local File":

<img src="alignment_mm_figures/igv1.png" alt="igv_1" width="80%"/>

Find your genome file and its index file on your laptop and choose both of the file at the same time:

<img src="alignment_mm_figures/igv2.png" alt="igv_2" width="80%"/>

-----

**7\.** Now let's load all the alignments. This can be done similarly as how we loaded the genome files, but using the "Tracks" tab and choose "Local File". **Note: alignments must be loaded one sample at a time; you must select both the bam file and its index .bai file at the same time for IGV to be able to load the alignment properly.**

After loading all 3 alignments, however, you will not see anything until you zoom in. The data was subsetted to cover the region of 10500000-10700000 on chr22. So, to be able to see anything, we must zoom in to this region first. Please see the screen shot below and the blue highlighted location is where we should specify our region of interest. After entering the correct coordinates, hit enter.

<img src="alignment_mm_figures/igv3.png" alt="igv_3" width="80%"/>

This region is still to large for IGV to display any alignment. Now, you can draw a box along the coordinate labled ruler to zoom in further.

<img src="alignment_mm_figures/igv4.png" alt="igv_4" width="80%"/>

---

**8\.** Now you can see all the alignments. Within each alignment, each colored bar represents a read. Clicking on a specific read will give you a popup with detailed information about that read. The colors (by default) are based on the pair-orientation for paired-end reads. You can change this (and other properties) of the tracks by clicking the setting wheel at the top-right corner of each bam track. For example, choosing "Squished" gives a more compact representation of the alignment. Play around with the various options to see how things change.

---

**9\.** I would like to introduce a tool: [Qualimap](http://qualimap.conesalab.org/doc_html/index.html), which takes sorted bam files as input and output many metrics that may point to potential problems. Two slurm scripts can be run to produce both single sample summaries, as well as multiple samples report.

    cd /share/workshop/gwas_workshop/$USER/gwas_example
    wget https://ucdavis-bioinformatics-training.github.io/2021-July-Genome-Wide-Association-Studies/software_scripts/scripts/qualimap_single.slurm
    wget https://ucdavis-bioinformatics-training.github.io/2021-July-Genome-Wide-Association-Studies/software_scripts/scripts/qualimap_multi.slurm

Once the jobs are done, we can download the html files and the corresponding images_* directories to our local machine for visualization. [here](multisampleBamQcReport.html) is the multiple sample report I produced.


