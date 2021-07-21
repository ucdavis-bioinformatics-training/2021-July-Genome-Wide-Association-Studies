#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=2
#SBATCH --time=60:00
#SBATCH --mem=4000 # Memory pool for all cores (see also --mem-per-cpu)
#SBATCH --partition=production
#SBATCH --reservation=workshop
#SBATCH --account=workshop
#SBATCH --output=slurmout/merge_%A_%a.out # File to which STDOUT will be written
#SBATCH --error=slurmout/merge_%A_%a.err # File to which STDERR will be written

start=`date +%s`
echo $HOSTNAME
aklog

outpath="/share/workshop/gwas_workshop/$USER/gwas_example/04-GATK"
echo "OUTPUT DIR: ${outpath}"
[[ -d ${outpath} ]] || mkdir -p ${outpath}
[[ -d ${outpath}/${sample} ]] || mkdir -p ${outpath}/${sample}


module load gatk
module load samtools


call="gatk --java-options '-Xmx4g -Xmx4g' MergeVcfs \
	-I ${outpath}/trio.filtered.snps.vcf.gz \
	-I ${outpath}/trio.filtered.indels.vcf.gz \
	-O ${outpath}/trio.filtered.all.vcf.gz"


echo $call
eval $call

end=`date +%s`
runtime=$((end-start))
echo $runtime

