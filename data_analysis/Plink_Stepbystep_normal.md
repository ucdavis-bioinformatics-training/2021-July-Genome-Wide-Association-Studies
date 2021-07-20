# Plink Step by Step for non FBAT (family based association test)
- This secion assumes that Plink Step By Step has already been completed.
- Rather then spend all of our time on family based studies I would like to give you all an idea of the differences between FBAT and normal association tests with

```
call11="plink --bfile ${outpath}/common_${sample} --assoc --adjust --out ${outpath}/tdt_${sample}"
echo $call11
eval $call11
```