#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=2
#SBATCH --time=60:00
#SBATCH --mem=4000 # Memory pool for all cores (see also --mem-per-cpu)
#SBATCH --partition=production
#SBATCH --reservation=workshop
#SBATCH --account=workshop
#SBATCH --array=1-3
#SBATCH --output=slurmout/gatk_%A_%a.out # File to which STDOUT will be written
#SBATCH --error=slurmout/gatk_%A_%a.err # File to which STDERR will be written

start=`date +%s`
echo $HOSTNAME
echo "My SLURM_ARRAY_TASK_ID: " $SLURM_ARRAY_TASK_ID
aklog

sample=`sed "${SLURM_ARRAY_TASK_ID}q;d" samples.txt`
echo "SAMPLE: ${sample}"

inpath="/share/workshop/gwas_workshop/$USER/gwas_example/03-BWA"
outpath="/share/workshop/gwas_workshop/$USER/gwas_example/04-GATK"
echo "OUTPUT DIR: ${outpath}"
[[ -d ${outpath} ]] || mkdir -p ${outpath}
[[ -d ${outpath}/${sample} ]] || mkdir -p ${outpath}/${sample}


module load gatk
module load samtools

fqheader=`zcat 00-RawData/${sample}_*_R1_*.fastq.gz |head -1 |cut -d' ' -f1 - `
RGID=$(echo "${fqheader}" |awk 'BEGIN{FS=":";OFS="."}{print $3,$4}' - )
RGPU=$(echo -e "${RGID}.${sample}" )
echo "$RGID"
echo "$RGPU"

call="gatk AddOrReplaceReadGroups \
	-I ${inpath}/${sample}/${sample}.sorted.bam \
	-O ${inpath}/${sample}/${sample}.sorted.RG.bam \
	--RGID ${RGID} \
	--RGPU ${RGPU} \
	--RGLB ${sample} \
	--RGPL Illumina \
	--RGSM ${sample}"


echo $call
eval $call

call="samtools index ${inpath}/${sample}/${sample}.sorted.RG.bam"

echo $call
eval $call

call="gatk BaseRecalibrator -R References/chr22.fa \
	-I ${inpath}/${sample}/${sample}.sorted.RG.bam \
	--known-sites References/Homo_sapiens_assembly38.dbsnp138.vcf \
	--known-sites References/Mills_and_1000G_gold_standard.indels.hg38.vcf \
	-L References/chr22.bed \
	-O ${outpath}/${sample}/BQSR.table"

echo $call
eval $call

call="gatk ApplyBQSR -R References/chr22.fa \
	-I ${inpath}/${sample}/${sample}.sorted.RG.bam \
	--bqsr-recal-file ${outpath}/${sample}/BQSR.table \
	-O ${outpath}/${sample}/${sample}_bqsr.bam"

echo $call
eval $call


end=`date +%s`
runtime=$((end-start))
echo $runtime

