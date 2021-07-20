#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=2
#SBATCH --time=60:00
#SBATCH --mem=4000 # Memory pool for all cores (see also --mem-per-cpu)
#SBATCH --partition=production
#SBATCH --reservation=workshop
#SBATCH --account=workshop
#SBATCH --output=slurmout/vqsr_%A_%a.out # File to which STDOUT will be written
#SBATCH --error=slurmout/vqsr_%A_%a.err # File to which STDERR will be written

start=`date +%s`
echo $HOSTNAME
aklog


outpath="/share/workshop/gwas_workshop/$USER/gwas_example/04-GATK"
echo "OUTPUT DIR: ${outpath}"
[[ -d ${outpath} ]] || mkdir -p ${outpath}


module load gatk
module load samtools


# SNPs
call="gatk --java-options '-Xmx4g -Xmx4g' VariantRecalibrator \
	-R References/chr22.fa \
	-V ${outpath}/trio.vcf.gz \
	--trust-all-polymorphic \
	-tranche 100.0 -tranche 99.95 -tranche 99.9 \
	--resource:hapmap,known=false,training=true,truth=true,prior=15.0 References/hapmap_3.3.hg38.vcf \
	--resource:omni,known=false,training=true,truth=false,prior=12.0 References/1000G_omni2.5.hg38.vcf \
	--resource:1000G,known=false,training=true,truth=false,prior=10.0 References/1000G_phase1.snps.high_confidence.hg38.vcf \
	--resource:dbsnp,known=true,training=false,truth=false,prior=2.0 References/Homo_sapiens_assembly38.dbsnp138.vcf \
	-an QD -an MQRankSum -an ReadPosRankSum -an FS -an MQ -an SOR -an DP \
	-mode SNP \
	--max-gaussians 4 \
	-O ${outpath}/trio.snp.recal \
	--tranches-file ${outpath}/trio.snp.tranches \
	--rscript-file ${outpath}/trio.snp.plots.R"

echo $call
eval $call

call="gatk --java-options '-Xmx4g' ApplyVQSR \
	-R References/chr22.fa \
	-V ${outpath}/trio.vcf.gz \
	-O ${outpath}/trio.snp.recal.vcf.gz \
	--truth-sensitivity-filter-level 99.9 \
	--tranches-file ${outpath}/trio.snp.tranches \
	--recal-file ${outpath}/trio.snp.recal \
	-mode SNP"

echo $call
eval $call


# Indels
call="gatk --java-options '-Xmx4g -Xmx4g' VariantRecalibrator \
	-R References/chr22.fa \
	-V ${outpath}/trio.vcf.gz \
	--trust-all-polymorphic \
	-tranche 100.0 -tranche 99.95 -tranche 99.9 \
	--resource:mills,known=false,training=true,truth=true,prior=12 References/Mills_and_1000G_gold_standard.indels.hg38.vcf \
	--resource:axiomPoly,known=false,training=true,truth=false,prior=10 References/Axiom_Exome_Plus.genotypes.all_populations.poly.hg38.vcf \
	--resource:dbsnp,known=true,training=false,truth=false,prior=2 References/Homo_sapiens_assembly38.dbsnp138.vcf \
	-an FS -an ReadPosRankSum -an MQRankSum -an QD -an SOR -an DP \
	--max-gaussians 4 \
	-mode INDEL \
	-O ${outpath}/trio.indel.recal \
	--tranches-file ${outpath}/trio.indel.tranches \
	--rscript-file ${outpath}/trio.indel.plots.R"

echo $call
eval $call

call="gatk --java-options '-Xmx4g' ApplyVQSR \
	-R References/chr22.fa \
	-V ${outpath}/trio.vcf.gz \
	-O ${outpath}/trio.indel.recal.vcf.gz \
	--truth-sensitivity-filter-level 99.9 \
	--tranches-file ${outpath}/trio.indel.tranches \
	--recal-file ${outpath}/trio.indel.recal \
	-mode INDEL"

echo $call
eval $call


end=`date +%s`
runtime=$((end-start))
echo $runtime

