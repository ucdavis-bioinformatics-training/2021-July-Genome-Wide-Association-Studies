#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --time=60:00
#SBATCH --mem=4000 # Memory pool for all cores (see also --mem-per-cpu)
#SBATCH --partition=production
#SBATCH --reservation=workshop
#SBATCH --account=workshop
#SBATCH --array=1-3
#SBATCH --output=slurmout/picard_%A_%a.out # File to which STDOUT will be written
#SBATCH --error=slurmout/picard_%A_%a.err # File to which STDERR will be written

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


module load samtools/1.11
module load picard-tools/2.23.4

call="picard MarkDuplicates I=${outpath}/${sample}/${sample}.sorted.bam \
	VALIDATION_STRINGENCY=LENIENT AS=true REMOVE_DUPLICATES=true \
	O=${outpath}/${sample}/${sample}.sorted.dup.bam \
	METRICS_FILE=${outpath}/${sample}/${sample}_metrics.txt 
	2> ${outpath}/${sample}/${sample}.picard.log"

echo $call
eval $call

end=`date +%s`
runtime=$((end-start))
echo $runtime

