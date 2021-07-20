

# Question on bim files:

What can you say about the variant at position 10001930? What is the observed variant and what is the reference allele?


```
cat ${outpath}/all_${sample}.bim | grep 10001930
```

```
21	.	0	10001930	T	C
```

Allele 1 is a T and is the minor allele or the variant where as the reference is allele 2 and is a C. 





# Question on fam files:

Amongst your group:
- Explain the relationship of 5136-SB-1280 in the study.
- Explain the significance of 5136-SB-0214 in the study.

```
man grep
cat 8_fam.txt | grep 1280 -A 4 -B 4
```


```
14071 5136-SB-0268 5136-SB-1281 5136-SB-1280 1 2
14071 5136-SB-1280 0 0 2 1
14071 5136-SB-1281 0 0 1 1
```

```
14023 5136-SB-0214 5136-SB-0216 5136-SB-0215 1 2
14023 5136-SB-0215 0 0 2 1
14023 5136-SB-0216 0 0 1 1
```

Explanation should be pretty straightforward.





# Question on genotyped 95%
- this is a good exercise to get a feel for the filtering process


```
diff ${outpath}/all_${sample}_fam.bim ${outpath}/clean-missing_${sample}.bim | head
```


```
head ${outpath}/all_${sample}_fam.bim
head ${outpath}/clean-missing_${sample}.bim
```


```
< 21	.	0	5030105	A	C
```



# Question on monomorphic
- What was the last variant removed?

```
diff ${outpath}/${outpath}/clean-missing_${sample}.bim ${outpath}/clean-missing-monos_${sample}.bim | tail
```


# Question about hemizygous

- How many hemizygous SNPs were there?


```
cat ${outpath}/allHemizgyous_${sample}.txt | wc -l
```

```
12179
```


