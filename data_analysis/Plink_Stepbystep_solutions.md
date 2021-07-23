

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



# Question about common variant filtering

What percentage of variants are removed at this step? Why do you think the nature of this percentage is fairly extreme?

282467/305530

Why do these exist in the distribution we saw like most are really rare and none inbetween really. Something to do with hardy weinberg?


# Question on IBD 

What could be happening with the relationship between 5136-SB-0663 & 5136-SB-0666? (Hint: look at PI HAT)

```
   FID1          IID1   FID2          IID2 RT    EZ      Z0      Z1      Z2  PI_HAT PHE       DST     PPC   RATIO
   1130  5136-SB-0678   1130  5136-SB-0679 PO   0.5  0.0332  0.9324  0.0344  0.5006   0  0.903368  1.0000 36.0000
   1130  5136-SB-0678   1130  5136-SB-0680 PO   0.5  0.0325  0.9196  0.0479  0.5077   0  0.904732  1.0000 17.7500
   1130  5136-SB-0679   1130  5136-SB-0680 OT     0  0.8181  0.1664  0.0155  0.0987  -1  0.852066  0.9292  2.9474
   1225  5136-SB-0663   1225  5136-SB-0664 PO   0.5  0.0000  1.0000  0.0000  0.5000   0  0.898837  1.0000 36.5000
   1225  5136-SB-0663   1225  5136-SB-0665 PO   0.5  0.0254  0.9461  0.0285  0.5015   0  0.903279  1.0000 36.0000
   1225  5136-SB-0663   1225  5136-SB-0666 FS   0.5  0.4414  0.4721  0.0865  0.3225   1  0.882745  0.9997  5.8182
   1225  5136-SB-0664   1225  5136-SB-0665 OT     0  1.0000  0.0000  0.0000  0.0000  -1  0.846839  0.0432  1.3438
   1225  5136-SB-0664   1225  5136-SB-0666 PO   0.5  0.0255  0.9206  0.0539  0.5142   0  0.905761  1.0000 36.5000
   1225  5136-SB-0665   1225  5136-SB-0666 PO   0.5  0.0361  0.9198  0.0441  0.5040   0  0.904128  1.0000 11.5000
```

I actually just noticed this yesterday as I am still curating the FAM file more myself but it seems records show that these two
are FS but here it looks like HS or something else weird like some sort of incest since it is unclear how PI_HAT ~.33. Something I will 
talk with anthony about. In addition you see here that we have some non perfect trios in the study. These are helpful







