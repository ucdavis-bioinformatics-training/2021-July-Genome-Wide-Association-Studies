Challenge Solutions
==========================

CHALLENGE #1
--------------------------------

After returning to your home directory (just enter 'cd' by itself), verify that the two following commands are equivalent (replacing, as usual, 'username' with your actual username):

    cd ../../home/username/; pwd  
    # pwd gives you your Present Working Directory; 
    # semicolons *complete* commands just like the '\n' (newline character) does
    cd ../../../../../../home/../home/username/; pwd

Why might these very different-looking commands be equivalent??

SOLUTION #1
------------

At least in BASH, specifying a directory above the root directory ("/") simply returns you to the root directory. So if your "cd" command takes steps above the root directory, you're simply looped back to the root directory for each of those steps, and then continues on from there.


CHALLENGE #2
-----------------

The 'head' and 'tail' commands view the first 10 (by default) lines of a file and last 10 lines of a file (type 'man head' or 'man tail' to consult their manuals). How would you create a second text file - let's say 'test2.txt' - with the line that says 'third' *before* the line that says 'second'? Without directly editing the file with a text editor, of course ...

SOLUTION #2
--------------

If test.txt looks like this:

    second
    third

and you want to create a new file with the second half before the first:

    tail -n 1 test.txt > test2.txt
    head -n 1 test.txt >> test2.txt

For a larger file you want to rearrange, just change the size of the head and tail. Want the middle 20 lines of a 60-line file? 

	head -n 40 file.txt | tail -n 20


CHALLENGE #3
-------------

What's the first command you executed today? How many times have you used the 'man' command today? Whatever that number is, it should be more! Just kidding. Sort of.

SOLUTION #3
-------------

Use the 'history' command.

    history | head

... will give you the first 10 commands in the buffer. If you've never logged in to tadpole before, those should be the first 10 commands from this morning. If you have worked on tadpole, or on our cluster, before today, then that may not be the case. Unfortunately there aren't any timestamps by default, but there is a way to get them (do some googling). To count the number of times you've used the "man" command, without miscounting times you've typed a word that *contains* the word "man", grep for whole words:

    history | grep -w man | wc -l

Leave off the "wc -l" if you want to make sure of the content of your commands. Oddly, grep's counting option ("-c") cannot be combined with the "-w" option, so that's the reason for piping to the "line count" command.


CHALLENGE #4
--------------

Many programs and data archives contain files named something like 'readme' or 'README' that contains important information for the user. How many of these files are there in the PhiX directory tree? How would you look at their contents? BONUS: Can you find out how many times the Illumina Adapter sequence (AGATCGGAAGAG) appears in fasta files?

SOLUTION #4
--------------

"find" is the command to use. Use its "iname" option (instead of "name") to make the name search *case insensitive*, and flank the name with wildcard characters to account for longer names that *contain* "README" or "readme":

    find PhiX -iname "*readme*" | wc -l

... where PhiX is the path to the main directory. One of the files is "PhiX/Illumina/RTA/Sequence/README.txt" ... view it using less:

    less PhiX/Illumina/RTA/Sequence/README.txt

There *is* a way to execute a command on each found file, which could the paginator "less", but it involves using the "{}" symbol to represent that file, and using a semicolon, which you have to "escape" so the shell doesn't interpret it before the find command can ... so it can look a little awkward:

    find PhiX -iname "*readme*" -exec less {} \;

In this case, you'll have to hit 'q' six times, to quit "less" for each of the six files.


CHALLENGE #5
-------------

The commands above only find start codons on the forward strand. How would you find the most common second codons (after the ATG) on the reverse strand? CHALLENGING BONUS: Can you add these in with the codons from the example above, and then count them all together? Note that the 'rev' command reverses strings, and the 'tr' command translates:

    echo CAFE | tr 'ABCDEF' 'abcdef'

SOLUTION #5
-------------

Let's store the codons from the forward strand, temporarily:

    grep -o "ATG......" phix.fa | cut -c4-6 > codons.txt

And then, reverse complement *before* grabbing our second codons exactly as above:

    tail -n 1 phix.fa | rev | tr "ACGT" "TGCA" | grep -o "ATG......" | cut -c4-6 >> codons.txt

The "tr" command complements base T for base A, base G for base C, etc. ... and then we grab the codons and append to our previous list. Now we can go ahead and sort and count:

    cat codons.txt | sort | uniq -c | sort -rn

This spits out our list, with most frequent first.


CHALLENGE #6
--------------

Can you run the minimap2 aligner to align the phiX sequence against our genome.fa reference (once again, ignoring that they're the same data)? Create another SAM file - say, aln.minimap2.sam - that we can compare to our earlier alignment that used BWA MEM. HINT: options may be involved.

SOLUTION #6
--------------

First install minimap2 and add it to your PATH, or load our module:

    module load minimap2/2.7

Then, minimap2 does not need to have an *indexed* reference, like BWA, though you *can* save an index for future use ("-d" option). The "-a" index can be used to force minimap2 to output SAM format, so it's comparable to our BWA MEM output, and potentially viewable with alignment viewers (after conversion to BAM).

    minimap2 -a genome.fa phix.fa 1> aln.minimap2.sam 2> aln.minimap2.err

Converting either file, so it's ready for an alignment viewer, involves several SAMtools commands, e.g.:

    module load samtools/1.9
    samtools view -uhS aln.minimap2.sam | samtools sort -o aln.minimap2.bam -
    samtools index aln.minimap2.bam

The "samtools view" command converts it to an uncompressed BAM file, which feeds right into the "samtools sort" command which sorts the alignments by position, instead of being in the order of the reads in the fastq file. The final "-" character meands that SAMtools requires a filename there, but there is no filename because we're piping the data in via STDOUT / STDIN from the view command. So the dash / minus character substitutes for the "file" that's taken from STDIN.



