#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=8
#SBATCH --time=60:00
#SBATCH --mem=4000 # Memory pool for all cores (see also --mem-per-cpu)
#SBATCH --partition=production
#SBATCH --reservation=workshop
#SBATCH --array=1-3
#SBATCH --output=slurmout/htstream_%A_%a.out # File to which STDOUT will be written
#SBATCH --error=slurmout/htstream_%A_%a.err # File to which STDERR will be written

start=`date +%s`
echo $HOSTNAME
echo "My SLURM_ARRAY_TASK_ID: " $SLURM_ARRAY_TASK_ID
aklog

sample=`sed "${SLURM_ARRAY_TASK_ID}q;d" samples.txt`
echo "SAMPLE: ${sample}"

outpath="/share/workshop/gwas_workshop/$USER/gwas_example/01-HTS_Preproc"
echo "OUTPUT DIR: ${outpath}"
[[ -d ${outpath} ]] || mkdir -p ${outpath}
[[ -d ${outpath}/${sample} ]] || mkdir -p ${outpath}/${sample}


module load htstream

call="hts_Stats -N 'RawReads stats' -L ${outpath}/${sample}/${sample}_htsStats.json -1 00-RawData/${sample}_*R1* -2 00-RawData/${sample}_*R2* | \
      hts_SeqScreener -N 'screen phix' -A ${outpath}/${sample}/${sample}_htsStats.json | \
      hts_SuperDeduper -N 'remove PCR duplicates' -e 2000 -A ${outpath}/${sample}/${sample}_htsStats.json | \
      hts_AdapterTrimmer -N 'trim adapters' -A ${outpath}/${sample}/${sample}_htsStats.json | \
      hts_QWindowTrim -N 'trim low qulity bases from ends of reads' -A ${outpath}/${sample}/${sample}_htsStats.json | \
      hts_NTrimmer -N 'remove any remanining N characters' -A ${outpath}/${sample}/${sample}_htsStats.json | \
      hts_LengthFilter -N 'remove reads < 50bp' -m 50 -n -A ${outpath}/${sample}/${sample}_htsStats.json | \
      hts_Stats -N 'final stats' -A ${outpath}/${sample}/${sample}_htsStats.json -f ${outpath}/${sample}/${sample}.htstream"

echo $call
eval $call

end=`date +%s`
runtime=$((end-start))
echo $runtime

