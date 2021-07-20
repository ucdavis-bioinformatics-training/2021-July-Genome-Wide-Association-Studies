#!/bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=2
#SBATCH --time=60:00
#SBATCH --mem=4000 # Memory pool for all cores (see also --mem-per-cpu)
#SBATCH --partition=production
#SBATCH --reservation=workshop
#SBATCH --account=workshop
#SBATCH --output=slurmout/vf_%A_%a.out # File to which STDOUT will be written
#SBATCH --error=slurmout/vf_%A_%a.err # File to which STDERR will be written

start=`date +%s`
echo $HOSTNAME
aklog


outpath="/share/workshop/gwas_workshop/$USER/gwas_example/04-GATK"
echo "OUTPUT DIR: ${outpath}"
[[ -d ${outpath} ]] || mkdir -p ${outpath}


module load gatk
module load samtools

# SNP

call="gatk --java-options '-Xmx4g -Xms4g' SelectVariants \
	-V ${outpath}/trio.vcf.gz \
	-select-type SNP \
	-O ${outpath}/trio.snps.vcf.gz"

echo $call
eval $call

call="gatk --java-options '-Xmx4g -Xmx4g' VariantFiltration \
	-R References/chr22.fa \
	-V ${outpath}/trio.snps.vcf.gz \
	-O ${outpath}/trio.filtered.snps.vcf.gz \
	--filter-name 'filter_QD2' \
	--filter-expression 'QD < 2.0' \
	--filter-name 'filter_QUAL30' \
	--filter-expression 'QUAL < 30.0' \
	--filter-name 'filter_FS60' \
	--filter-expression 'FS > 60.0' \
	--filter-name 'filter_SOR3' \
	--filter-expression 'SOR > 3.0' \
	--filter-name 'filter_MQ40' \
	--filter-expression 'MQ < 40.0' \
	--filter-name 'filter_MQRankSum-12.5' \
	--filter-expression 'MQRankSum < -12.5' \
	--filter-name 'filter_ReadPosRankSum-8' \
	--filter-expression 'ReadPosRankSum < -8.0'"


echo $call
eval $call

# Indels

call="gatk --java-options '-Xmx4g -Xms4g' SelectVariants \
	-V ${outpath}/trio.vcf.gz \
	-select-type INDEL \
	-O ${outpath}/trio.indels.vcf.gz"

echo $call
eval $call

call="gatk --java-options '-Xmx4g -Xmx4g' VariantFiltration \
	-R References/chr22.fa \
	-V ${outpath}/trio.indels.vcf.gz \
	-O ${outpath}/trio.filtered.indels.vcf.gz \
	--filter-name 'filter_QD2' \
	--filter-expression 'QD > 2.0' \
	--filter-name 'filter_QUAL30' \
	--filter-expression 'QUAL < 30.0' \
	--filter-name 'filter_FS200' \
	--filter-expression 'FS > 200.0' \
	--filter-name 'filter_ReadPosRankSum-20' \
	--filter-expression 'ReadPosRankSum < -20.0'"

echo $call
eval $call


end=`date +%s`
runtime=$((end-start))
echo $runtime

