#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=2
#SBATCH --time=60:00
#SBATCH --mem=4000 # Memory pool for all cores (see also --mem-per-cpu)
#SBATCH --partition=production
#SBATCH --reservation=workshop
#SBATCH --account=workshop
#SBATCH --output=slurmout/gt_%A_%a.out # File to which STDOUT will be written
#SBATCH --error=slurmout/gt_%A_%a.err # File to which STDERR will be written

start=`date +%s`
echo $HOSTNAME
echo "My SLURM_ARRAY_TASK_ID: " $SLURM_ARRAY_TASK_ID
aklog

sample=`sed "${SLURM_ARRAY_TASK_ID}q;d" samples.txt`
echo "SAMPLE: ${sample}"

outpath="/share/workshop/gwas_workshop/$USER/gwas_example/04-GATK"
echo "OUTPUT DIR: ${outpath}"
[[ -d ${outpath} ]] || mkdir -p ${outpath}
[[ -d ${outpath}/${sample} ]] || mkdir -p ${outpath}/${sample}
[[ -d ${outpath} ]] || mkdir -p ${outpath}/GVCF.db
[[ -d ./tmp ]] || mkdir -p ./tmp


module load gatk
module load samtools


if [ -f "trio.sample_map" ]
then
  rm trio.sample_map
fi


while read sample
do
  echo -e "${sample}\t${outpath}/${sample}/${sample}.g.vcf" >> trio.sample_map
done<samples.txt



call="gatk --java-options '-Xmx4g -Xmx4g' GenomicsDBImport \
	--genomicsdb-workspace-path ${outpath}/GVCF.db \
	--sample-name-map trio.sample_map \
	--tmp-dir ./tmp
	-L chr22:10500000-10700000"


echo $call
eval $call

call="gatk --java-options '-Xmx4g' GenotypeGVCFs \
	-R References/chr22.fa \
	-V gendb://${outpath}/GVCF.db \
	-O ${outpath}/trio.vcf.gz \
	--tmp-dir ./tmp"

echo $call
eval $call


end=`date +%s`
runtime=$((end-start))
echo $runtime

