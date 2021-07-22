# Plink Step by Step
- What is plink?
    - [Plink Website](https://zzz.bwh.harvard.edu/plink/)
    - PLINK is a free, open-source whole genome association analysis toolset, designed to perform a range of basic, 
    large-scale analyses in a computationally efficient manner.

## Outline
- About this dataset    
- Convert vcf file to plink format for our processing workflow
- Update the family based information for plink
- Filter based on percentage genotyped 
- Filter based on monomorphic SNPs
- Remove hemizygous SNPs
- Get Mendelian Errors and filter these out.
- Calculate Identity by Descent (IBD)
- Calculate TDT (transmission disequilibrium test), a type of FBAT (family based assocation test)


![](figures/d2a61bc2.png)

--- 


# About this dataset

- We will be analyzing two chromosomes from family based association study focusing on metopic craniosynostosis.
- We are analyzing two chromosomes due to the fact that running the full data could be very computationally intensive and
this data is not fully released to the public yet.
- chr 21 and chr 22 will be used as they are on the smaller side. 

## What is craniosynostosis?

- Craniosynostosis is the premature suture during skull formation
- Suture: A type of joint between the bones of the skull where the bones are held tightly together by fibrous tissue
- In particular, we will focus on the midline suture abnormalities.
- Requires intensive surgery at birth. 
- Occurs in every 1/2000-1/2500 births.

![](figures/599757f3.png)

![](figures/32cd5221.png)


## WGS data was collected from trios with an affected child and unaffected parents. We now have a vcf file as discussed in the data reduction.

Just to be clear lets look at a pedigree of the type of trios we are interested in, and also just do a quick review of pedigrees. 

![](figures/58ac0786.png)


Here would be a female child example of this trio: 

![](figures/0cbefc6a.png)

---


### <font color='red'> Start Group Exercise 1: (25 mins) </font>
 
- At every step take a second with your group to decipher each command before running.

---
# Lets do some initial setup
- first we will load the plink module
- next we will set a sample or in this case the chromosome we want to analyze
- in addition we will set an outpath for the analysis and make that directory


```
mkdir /share/workshop/gwas_workshop/${USER}
mkdir /share/workshop/gwas_workshop/${USER}/plink
cd /share/workshop/gwas_workshop/${USER}/plink

# this will take say omitting directories and that is ok
cp /share/workshop/plink_template/* .
mkdir 00-Fixed
ln -s /share/workshop/plink_template/00-Fixed/* 00-Fixed/
```


```
module load plink/1.90p
sample='21'
outpath='01-Plink_fam_fix'
[[ -d ${outpath} ]] || mkdir ${outpath}
```

- also we will indicate where the chromosome based vcf files are located and create an `infile` based on the sample or chromosome number

```
infile="00-Fixed/chr${sample}.subset.vqsr.vcf"
```


---

# Generate the b file
- What does this command generate?
- `.bim`, `.fam`, `.log`, `.nosex`, `.bed`

```
makebfile="plink --vcf ${infile} --make-bed --out ${outpath}/all_${sample}"
echo $makebfile
eval $makebfile
```


## Lets take a look at the files generated

```
head ${outpath}/all_${sample}.bim
cat ${outpath}/all_${sample}.bim | wc -l
cat ${outpath}/all_${sample}.log
head ${outpath}/all_${sample}.nosex
```

- One particular file type of interest is the `.bim` file. This is text file with no header line, and one line per variant with the following six fields:

    1. Chromosome code (either an integer, or 'X'/'Y'/'XY'/'MT'; '0' indicates unknown) or name
    2. Variant identifier
    3. Position in morgans or centimorgans (safe to use dummy value of '0')
    4. Base-pair coordinate (1-based; limited to 231-2)
    5. Allele 1 (corresponding to clear bits in .bed; usually minor)
    6. Allele 2 (corresponding to set bits in .bed; usually major)


- What does the major and minor allele mean?
    - major allele: the most common allele for a given SNP
    - minor allele: the less common allele for a SNP. The MAF is therefore the minor allele frequencey. This measure can be used to get a rough idea of the variation of genotypes for a given SNP in a given population, in other words it tells you how common this SNP is.


## Question:

What can you say about the variant at position 10001930? What is the observed variant and what is the reference allele?


---

# Update the .fam file
- What is a .fam file and why do we care about it?
- [From plink documentation](https://www.cog-genomics.org/plink/1.9/formats#fam)
- A text file with no header line, and one line per sample with the following six fields:
    1. Family ID ('FID')
    2. Within-family ID ('IID'; cannot be '0')
    3. Within-family ID of father ('0' if father isn't in dataset)
    4. Within-family ID of mother ('0' if mother isn't in dataset)
    5. Sex code ('1' = male, '2' = female, '0' = unknown)
    6. Phenotype value ('1' = control, '2' = case, '-9'/'0'/non-numeric = missing data if case/control)

```
fam="8_fam.txt"
head ${fam}
```

```
famin="plink --bfile ${outpath}/all_${sample} --make-bed --fam ${fam} --out ${outpath}/all_${sample}_fam"
echo $famin
eval $famin
```


## Question:
Amongst your group:
- Explain the relationship of 5136-SB-1280 in the study. 
- Explain the significance of 5136-SB-0214 in the study.





---




### <font color='red'> End Group Exercise 1, Break </font>

Discussing the answers to the above question. 5 minute break.

After returning from break we will work on the second half of this document after I give a brief description of the portions involved. 




---


### <font color='red'> Start Group Exercise 2: (25 mins) </font>

- At every step take a second with your group to decipher each command before running.




---


# Remove all variants not genotyped to 95%
- Subsequent analyses can be set to automatically exclude SNPs on the basis of missing genotype rate, with the --geno option: the default is to include all SNPS (i.e. --geno 1). 
- To include only SNPs with a 95% genotyping rate (5% missing) use the following command
- This is performed to ensure that 95% of individuals in the study are genotyped at a given SNP. When I run this for instance on chrom 21 we see about a reduction in 10%

```
genotyped="plink --bfile ${outpath}/all_${sample}_fam --geno 0.05 --make-bed --out ${outpath}/clean-missing_${sample}"
echo $genotyped
eval $genotyped
```

```
cat ${outpath}/clean-missing_${sample}.bim | wc -l
```


## Question:

What was position of the 5th variant removed?

---


# Remove monomorphic SNPs
- [From Biostars](https://www.biostars.org/p/80014/#80018)
- Monomorphic SNPs are SNPs that are fixed at one allele in the entire dataset.  This means that every single person in the dataset has a “G” for a particular SNP and no other allele.  So this SNP will have no information at all, because it has no other allele to compare to.
- Mmonomorphic means something that appears in just one state (or form), in contrast to polymorphic that means something that appears in more than one form. SNPs are by definition polymorphic. A monomorphic site is one site in which all the individuals have the same form (genotype). It is a good idea to exclude it from analysis because it gives no information.

```
mono="plink --bfile ${outpath}/clean-missing_${sample} --maf 0.000000001 --make-bed --out ${outpath}/clean-missing-monos_${sample}"
echo $mono
eval $mono
```

```
cat ${outpath}/clean-missing-monos_${sample}.bim | wc -l
```


## Question:

What was the last variant removed?


---

# The following line will create a temporary variant identifier in the `.bim` file.    

```
cat ${outpath}/clean-missing-monos_${sample}.bim > ${outpath}/tempfile_${sample}.bim
awk '{print $1"\t"$4"\t"$3"\t"$4"\t"$5"\t"$6}' ${outpath}/tempfile_${sample}.bim > ${outpath}/clean-missing-monos_${sample}.bim
```

---


# Remove all SNPs with "*" as an alt allele (hemizygous snps)

- Removing variants that might have more than one alternate allele here.  
- You normally think of SNPs as having a single reference and alternate allele, but some SNPs have more than one alternate allele.  
- Or it may be a biallelic SNP but it still couldn’t determine alt allele for whatever reason.  
- So you are removing variants where the sequencer couldn’t accurately determine the alternate allele. 
- Basically, * is a catchall that says, something is wrong with this variant because sequencer couldn’t determine definitely what alt allele is.
- Also, I usually do refer to these SNPs as hemizygous but since that term can also mean something else perhaps you should refer to them as SNPs with indeterminate alternate allele or something.
- [Here is a good link explaining biallelic and multiallelic SNPs](https://gatk.broadinstitute.org/hc/en-us/articles/360035890771-Biallelic-vs-Multiallelic-sites)

```
grep "*" ${outpath}/clean-missing-monos_${sample}.bim | awk '{print $4}' > ${outpath}/allHemizgyous_${sample}.txt
hemizy="plink --bfile ${outpath}/clean-missing-monos_${sample} --exclude ${outpath}/allHemizgyous_${sample}.txt --freq --allow-no-sex --make-bed --out ${outpath}/clean-basic-QC_${sample}"
echo $hemizy
eval $hemizy
```

```
head ${outpath}/allHemizgyous_${sample}.txt
cat ${outpath}/allHemizgyous_${sample}.txt | wc -l
cat ${outpath}/clean-missing-monos_${sample}.bim | grep "*" | head
head ${outpath}/clean-missing-monos_${sample}.bim
```


## Question:

How many hemizygous SNPs were there?


---



### <font color='red'> End Group Exercise 2, Break </font>

We will take a break here and come back in about 15 minutes after discussing the answers to the above questions. 

After returning from break we will work on the second half of this document after I give a brief description of the portions involved. 


---



### <font color='red'> Start Group Exercise 3 (35 mins): </font>


---

# Filter on common variants for IBD
- need more info here

```
common="plink --bfile ${outpath}/clean-basic-QC_${sample} --maf 0.4 --make-bed --out ${outpath}/common_${sample}"
echo $common
eval $common
```

## Question:

What percentage of variants are removed at this step? Why do you think the nature of this percentage is fairly extreme?


---

# Calculate IBD

- What is IBD or identity by descent? This is the percentage relationship that you have with any given individual in the study.
- This is an important part to stop at and assess that each of our trios have the proper IBD.

```
ibdcalc="plink --bfile ${outpath}/common_${sample} --extract ${outpath}/common_${sample}.prune.in --make-bed --out ${outpath}/idb_${sample}"
echo $ibdcalc
eval $ibdcalc
```

---


# Calculate IBD within and across families (relatives check)
- What kind of file is produced here? `.genome` file
- [genome file from Plink](https://www.cog-genomics.org/plink/1.9/ibd)
- These calculations are not LD-aware. It is usually a good idea to perform some form of LD-based pruning before invoking them.
- https://www.biostars.org/p/188894/#189052

```
relcheck="plink --bfile ${outpath}/idb_${sample} --genome --rel-check --out ${outpath}/ibd-relcheck_${sample}"
echo $relcheck
eval $relcheck
```

- Lets check out the `.genome` file.

```
head ${outpath}/ibd-relcheck_${sample}.genome
```


## Question:




---

# Get Mendelian Errors
- it is very important to curate based on IBD before this step!!

- [From Wikipedia](https://en.wikipedia.org/wiki/Mendelian_error)
- "A Mendelian error in the genetic analysis of a species, describes an allele in an individual which could not have been received from either of its biological parents by Mendelian inheritance."
- "Possible explanations for Mendelian errors are genotyping errors, erroneous assignment of the individuals as relatives, or de novo mutations."
- A monomorphic SNP is a SNP that is fixed in the entire dataset at one allele whereas Mendelian errors are removing SNPs that cannot have been inherited from parents.  For instance, both parents have AA genotypes but kid has AG.  Kid could not have inherited G from mom and dad, so either a de novo mutation or sequencing error

- What is a de novo mutation?

![](figures/0439cf2e.png)

```
getmendel="plink --bfile ${outpath}/clean-basic-QC_${sample} --mendel --out ${outpath}/Mendelian_${sample}"
echo $getmendel
eval $getmendel
```

```
head ${outpath}/Mendelian_${sample}.mendel
head ${outpath}/clean-basic-QC_${sample}.bim
```

---


# Remove Mendelian Errors

```
remmendel="plink --bfile ${outpath}/clean-basic-QC_${sample} --exclude ${outpath}/Mendelian_${sample}.mendel --make-bed --out ${outpath}/cleanedME_${sample}"
echo $remmendel
eval $remmendel
```

```
head ${outpath}/cleanedME_${sample}.bim
```




---

### <font color='red'> End Group Exercise 3, Break </font>

We will take a break here and come back in about 5 minutes after discussing the answers to the above questions. 

After returning from break we will work on the remainder of this document after I give a brief description of the portions involved. 

---

### <font color='red'> Start Group Exercise 4 (45 mins): </font>


---


# Calculate TDT across families

- [From Wikipedia](https://en.wikipedia.org/wiki/Transmission_disequilibrium_test)
- A specificity of the TDT is that it will detect genetic linkage only in the presence of genetic association. While genetic association can be caused by population structure, genetic linkage will not be affected, which makes the TDT robust to the presence of population structure.
- The derivation of the TDT shows that one should only use the heterozygous parents (total number b+c). The TDT tests whether the proportions b/(b+c) and c/(b+c) are compatible with probabilities (0.5, 0.5). This hypothesis can be tested using a binomial (asymptotically chi-square) test with one degree of freedom:

![](figures/c6c3b6ac.png)


- it is important to notice the `--freq` command will be used here to produce a file with the MAF (minor allele frequency) 
for the variant in the population. 
- we will be using the information in this file later as it provides further helpful annotation. 

```
tdtcall="plink --bfile ${outpath}/cleanedME_${sample} --tdt --freq --adjust --out ${outpath}/tdt_${sample}"
echo $tdtcall
eval $tdtcall
```


## Lets check out the `frq` file and the `tdt` file. We will want the information from both of these for later. 

```
head ${outpath}/tdt_${sample}.tdt
head ${outpath}/tdt_${sample}.tdt.adjusted
head ${outpath}/tdt_${sample}.frq
```


Now on your local computer command line or filezilla/winSCP:



- We took a look at the file via the CLI with the `head` command but we should start getting comfortable with 
transferring files to our local computer. The cluster is great but it doesnt present data quite as nicely as excel/google sheets. 
- use `pwd` to see where you are in your local computer. You may want to navigate somewhere like a workshop folder in, for example `~/Desktop/gwas_workshop`



# Lets convert our plink output at the point prior to TDT in order to annotate
- we do this here in prep for annotation which we will perform later

```
cd ${outpath}
module load annovar
```

```
wannovarvcf="plink --bfile cleanedME_${sample} --recode vcf --out cleanedME_${sample}_vcf"
echo $wannovarvcf
eval $wannovarvcf

convert2="convert2annovar.pl -format vcf4old --withfreq cleanedME_${sample}_vcf.vcf > chr${sample}_anno.avinput"
echo $convert2
eval $convert2
```

```
head chr${sample}_anno.avinput
```



# Putting it all together in a script
- first we need to do a bit of setup 

```
cd /share/workshop/gwas_workshop/${USER}/plink
mkdir stderr
mkdir stdout
```


## Here is the script we will run take a look with your group and see if you have any questions or if there is anything unclear to the group.
- when you are comfortable move on to the `sbatch` command below where you will use this script on the cluster.

<pre class="prettyprint"><code class="language-sh" style="background-color:333333">
#!/bin/bash
#
#SBATCH --time=60:00 # days-hours
#SBATCH --job-name=plinkrun  # Job name
#SBATCH --array=1-2 # all chroms plus x and y
#SBATCH --nodes=1
#SBATCH --mem=20000 # Memory pool for all cores (see also --mem-per-cpu)
#SBATCH --reservation=workshop
#SBATCH --reservation=workshop
#SBATCH --account=workshop
#SBATCH --output=stdout/counts-ArrayJob_%A_%a.out # File to which STDOUT will be written
#SBATCH --error=stderr/counts-ArrayJob_%A_%a.err # File to which STDERR will be written
#SBATCH --mail-type=END # Type of email notification- BEGIN,END,FAIL,ALL
##SBATCH --mail-user=kgmitchell@ucdavis.edu # Email to which notifications will be sent (please change this if you want to uncomment this)


start=`date +%s`

hostname

module load plink/1.90p

sample=`sed "${SLURM_ARRAY_TASK_ID}q;d" chrom.txt`


cd /share/workshop/gwas_workshop/${USER}/plink

outpath='01-Plink_fam_fix'
[[ -d ${outpath} ]] || mkdir ${outpath}


infile="00-Fixed/chr${sample}.subset.vqsr.vcf"

# make b file
makebfile="plink --vcf ${infile} --make-bed --out ${outpath}/all_${sample}"
echo $makebfile
eval $makebfile


# set fam file and update our info
fam="8_fam.txt"
head ${fam}


famin="plink --bfile ${outpath}/all_${sample} --make-bed --fam ${fam} --out ${outpath}/all_${sample}_fam"
echo $famin
eval $famin


# filter based on genotyped amount
genotyped="plink --bfile ${outpath}/all_${sample}_fam --geno 0.05 --make-bed --out ${outpath}/clean-missing_${sample}"
echo $genotyped
eval $genotyped


# remove monomorphic SNPs
mono="plink --bfile ${outpath}/clean-missing_${sample} --maf 0.000000001 --make-bed --out ${outpath}/clean-missing-monos_${sample}"
echo $mono
eval $mono

# create a temp variant identifier
cat ${outpath}/clean-missing-monos_${sample}.bim > ${outpath}/tempfile_${sample}.bim
awk '{print $1"\t"$4"\t"$3"\t"$4"\t"$5"\t"$6}' ${outpath}/tempfile_${sample}.bim > ${outpath}/clean-missing-monos_${sample}.bim


# filter out hemizygous SNPs
grep "*" ${outpath}/clean-missing-monos_${sample}.bim | awk '{print $4}' > ${outpath}/allHemizgyous_${sample}.txt
hemizy="plink --bfile ${outpath}/clean-missing-monos_${sample} --exclude ${outpath}/allHemizgyous_${sample}.txt --freq --allow-no-sex --make-bed --out ${outpath}/clean-basic-QC_${sample}"
echo $hemizy
eval $hemizy


# filter on common variants for IBD
common="plink --bfile ${outpath}/clean-basic-QC_${sample} --maf 0.005 --make-bed --out ${outpath}/common_${sample}"
echo $common
eval $common


# calculate IBD
ibdcalc="plink --bfile ${outpath}/common_${sample} --extract ${outpath}/common_${sample}.prune.in --make-bed --out ${outpath}/idb_${sample}"
echo $ibdcalc
eval $ibdcalc

# perform relative check
relcheck="plink --bfile ${outpath}/idb_${sample} --genome --rel-check --out ${outpath}/ibd-relcheck_${sample}"
echo $relcheck
eval $relcheck


# get mendelian errors
getmendel="plink --bfile ${outpath}/clean-basic-QC_${sample} --mendel --out ${outpath}/Mendelian_${sample}"
echo $getmendel
eval $getmendel


# remove mendelian errors
remmendel="plink --bfile ${outpath}/clean-basic-QC_${sample} --exclude ${outpath}/Mendelian_${sample}.mendel --make-bed --out ${outpath}/cleanedME_${sample}"
echo $remmendel
eval $remmendel


# calculate tdt with p-value adjustment
# we will use the cleanedME file as that was the most filtered file prior to statistical tests
tdtcall="plink --bfile ${outpath}/cleanedME_${sample} --tdt --freq --adjust --out ${outpath}/tdt_${sample}"
echo $tdtcall
eval $tdtcall


# wAnnovar prep
cd ${outpath}
module load annovar

wannovarvcf="plink --bfile cleanedME_${sample} --recode vcf --out cleanedME_${sample}_vcf"
echo $wannovarvcf
eval $wannovarvcf

convert2="convert2annovar.pl -format vcf4old --withfreq cleanedME_${sample}_vcf.vcf > chr${sample}_anno.avinput"
echo $convert2
eval $convert2

</code></pre>




## Finally you can submit the jobs to the cluster
```
sbatch plink_final.slurm
```


## Check the status of your jobs. This should not take long. 
- wait until these are complete before you move on to the ` cat` command below.


```
squeue -u ${USER}
```


- Now that we have run both chromosome 21 and 22 we will combine the data and annotate it using wAnnovar
- the `.avinput` is a file format that is prepared for annotation with wAnnovar, since we have multiple of these lets put them together with the following simple command:

```
cat ${outpath}/*.avinput > master.avinput
```

---

### <font color='red'> End Group Exercise 4, Break </font>

We will take a break here and come back in about 15 minutes after discussing the answers to the above questions. 

After returning from break we will move onto the wAnnovar annotation with the data we have produced here. 

---


# TODO 
- fix plink_final.slurm and fix mendel error and ibd order
- add extracting a few certain snps to see which individuals vary
- check my fam file with Anthony
- fix allow-no-sex and clean up the fam file
- what should params be for MAF????
- could add just explore tdt file with excel part