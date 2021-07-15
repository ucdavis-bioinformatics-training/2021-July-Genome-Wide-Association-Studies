#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=8
#SBATCH --time=60:00
#SBATCH --mem=10000 # Memory pool for all cores (see also --mem-per-cpu)
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
eval $call

end=`date +%s`
runtime=$((end-start))
echo $runtime

