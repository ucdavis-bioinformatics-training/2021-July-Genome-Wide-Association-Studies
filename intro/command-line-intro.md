<script>
function buildQuiz(myq, qc){
  // variable to store the HTML output
  const output = [];

  // for each question...
  myq.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label><br/>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div><br/>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  qc.innerHTML = output.join('');
}

function showResults(myq, qc, rc){

  // gather answer containers from our quiz
  const answerContainers = qc.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myq.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  rc.innerHTML = `${numCorrect} out of ${myq.length}`;
}
</script>

# Introduction to Command Line Interface

### A CLI cheat sheet

<object data="https://files.fosswire.com/2007/08/fwunixref.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="https://docs.conda.io/projects/conda/en/4.6.0/_downloads/52a95608c49671267e40c689e0bc00ca/conda-cheatsheet.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="http://yoursite.com/the.pdf">Download PDF</a>.</p>
    </embed>
</object>


## What is the Command-Line Interface

* The CLI is a tool into which one can type commands to perform tasks.
* The user interface that accepts the typed responses and displays the data on the screen is called a shell: bash, tcsh…
* An all-text display (most of the time your mouse doesn't work)

<img src="figures/cli_figure1.png" alt="cli_figure1" width="800px"/>

After opening or logging into a terminal, system messages are often displayed, followed by the "prompt".
A prompt is a short text message at the start of the command line and ends with '$' in bash shell, commands are typed after the prompt. The prompt typically follows the form **username@server:current_directory$**. If your screen looks like the one below, i.e. your see your a bunch of messages and then your username followed by "@tadpole:~$" at the beginning of the line, then you are successfully logged in.

<img src="figures/cli_figure4.png" alt="cli_figure4" width="800px"/>


## Command Line Basics

First some basics - how to look at your surroundings.

    pwd

present working directory ... where am I?

    ls

list files here ... you should see nothing since your homes are empty

    ls /tmp/

list files somewhere else, like /tmp/


Because one of the first things that's good to know is *how to escape once you've started something you don't want*.

    sleep 1000  # wait for 1000 seconds!

Use Ctrl-c (shows as '^C' in the terminal) to exit (kill) a command. In some cases, a different key sequence is required (Ctrl-d). Note that anything including and after a "#" symbol is ignored, i.e. a comment. **So in all the commands below, you do not have to type anything including and past a "#".**


#### Options

Each command can act as a basic tool, or you can add 'options' or 'flags' that modify the default behavior of the tool. These flags come in the form of '-v' ... or, when it's a more descriptive word, two dashes: '\-\-verbose' ... that's a common (but not universal) one that tells a tool that you want it to give you output with more detail. Sometimes, options require specifying amounts or strings, like '-o results.txt' or '\-\-output results.txt' ... or '-n 4' or '\-\-numCPUs 4'. Let's try some, and see what the man page for the 'list files' command 'ls' is like.

    ls -R /

Lists directories and files *recursively*. This will be a very long output, so use Ctrl-C to break out of it. Sometimes you have to press Ctrl-C many times to get the terminal to recognize it. In order to know which options do what, you can use the manual pages. To look up a command in the manual pages type "man" and then the command name. So to look up the options for "ls", type:

    man ls

Navigate this page using the up and down arrow keys, PageUp and PageDown, and then use q to quit out of the manual. In this manual page, find the following options, quit the page, and then try those commands. You could even open another terminal, log in again, and run manual commands in that terminal.

    ls -l /usr/bin/ # long format, gives permission values, owner, group, size, modification time, and name

<img src="figures/ls1.png" alt="ls1" width="800px"/>

    ls -a /lib # shows ALL files, including hidden ones

<img src="figures/ls2.png" alt="ls2" width="800px"/>

    ls -l -a /usr/bin # does both of the above

<img src="figures/ls3.png" alt="ls3" width="800px"/>

    ls -la /usr/bin # option 'smushing' can be done with single letter options

<img src="figures/ls4.png" alt="ls4" width="800px"/>

    ls -ltrha /usr/bin # shows all files, long format, in last modified time reverse order, with human readable sizes

<img src="figures/ls5.png" alt="ls5" width="800px"/>
    
And finally adding color (white for regular files, blue for directories, turquoise for links): 

    ls -ltrha --color /usr/bin # single letter (smushed) vs word options (Linux)
    
**OR**

    ls -ltrhaG /usr/bin # (MacOS)

<img src="figures/ls6.png" alt="ls6" width="800px"/>


Quick aside: what if I want to use same options repeatedly? and be lazy? You can create a shortcut to another command using 'alias'.

    alias ll='ls -lah'
    ll


## Directory Structure

Absolute path: always starts with ”/” - the root folder

/share/workshop/msettles/cli

the folder (or file) "cli" in the folder "msettles" in the folder "workshop" in the folder "share" from the root folder.

Relative path: always relative to our current location.

_a single dot (.) refers to the current directory_  
_two dots (..) refers to the directory one level up_  

<img src="figures/cli_figure2.png" alt="cli_figure2" width="500px"/>

Usually, /home is where the user accounts reside, ie. users' 'home' directories.
For example, for a user that has a username of “msettles”: their home directory is /home/msettles
It is the directory that a user starts in after starting a new shell or logging into a remote server.

The tilde (~) is a short form of a user’s home directory.

## Syntax of a command

* A command plus the required parameters/arguments
* The separator used in issuing a command is space, number of spaces does not matter

<img src="figures/cli_figure3.png" alt="cli_figure3" width="800px"/>

## Quiz 1

<div id="quiz1" class="quiz"></div>
<button id="submit1">Submit Quiz</button>
<div id="results1" class="output"></div>
<script>
quizContainer1 = document.getElementById('quiz1');
resultsContainer1 = document.getElementById('results1');
submitButton1 = document.getElementById('submit1');

myQuestions1 = [
  {
    question: "What does the -h option for the ls command do?",
    answers: {
      a: "Creates a hard link to a file",
      b: "Shows the file sizes in a human readable format",
      c: "Shows the help page",
      d: "Recursively lists directories"
    },
    correctAnswer: "b"
  },
  {
    question: "What does the -l option for ls do?",
    answers: {
      a: "Produces a listing of all the links",
      b: "Produces a time stamp sorted list",
      c: "Produces a log file",
      d: "Produces a detailed format list"
    },
    correctAnswer: "d"
  },
  {
    question: "Which option turns off the default sort in the ls output?",
    answers: {
      a: "-U",
      b: "-t",
      c: "--hide",
      d: "-H"
    },
    correctAnswer: "a"
  }
];

buildQuiz(myQuestions1, quizContainer1);
submitButton1.addEventListener('click', function() {showResults(myQuestions1, quizContainer1, resultsContainer1);});
</script>


## Getting Around

The filesystem you're working on is like the branching root system of a tree. The top level, right at the root of the tree, is called the 'root' directory, specified by '/' ... which is the divider for directory addresses, or 'paths'. We move around using the 'change directory' command, 'cd'. The command pwd return the present working directory.

    cd  # no effect? that's because by itself it sends you home (to ~)
    cd /  # go to root of tree's root system
    cd home  # go to where everyone's homes are
    pwd
    cd username  # use your actual home, not "username"
    pwd
    cd /
    pwd
    cd ~  # a shortcut to home, from anywhere
    pwd
    cd .  # '.' always means *this* directory
    pwd
    cd ..  # '..' always means *one directory up*
    pwd

<img src="figures/cli_figure5.png" alt="cli_figure5" width="800px"/>

**You should also notice the location changes in your prompt.**

## Absolute and Relative Paths

You can think of paths like addresses. You can tell your friend how to go to a particular store *from where they are currently* (a 'relative' path), or *from the main Interstate Highway that everyone uses* (in this case, the root of the filesystem, '/' ... this is an 'absolute' path). Both are valid. But absolute paths can't be confused, because they always start off from the same place, and are unique. Relative paths, on the other hand, could be totally wrong for your friend *if you assume they're somewhere they're not*. With this in mind, let's try a few more:

    cd /usr/bin  # let's start in /usr/bin

**relative** (start here, take one step up, then down through lib and gcc)

    cd ../lib/init/
    pwd

**absolute** (start at root, take steps)

    cd /usr/lib/init/
    pwd

Now, because it can be a real pain to type out, or remember these long paths, we need to discuss ...

## Tab Completion

Using tab-completion is a must on the command line. A single \<tab\> auto-completes file or directory names when there's only one name that could be completed correctly. If multiple files could satisfy the tab-completion, then nothing will happen after the first \<tab\>. In this case, press \<tab\> a second time to list all the possible completing names. Note that if you've already made a mistake that means that no files will ever be completed correctly from its current state, then \<tab\>'s will do nothing.

touch updates the timestamp on a file, here we use it to create three empty files.

    cd # go to your home directory
    mkdir ~/tmp
    cd ~/tmp
    touch one seven september
    ls o

tab with no enter should complete to 'one', then enter

    ls s

tab with no enter completes up to 'se' since that's in common between seven and september. tab again and no enter, this second tab should cause listing of seven and september. type 'v' then tab and no enter now it's unique to seven, and should complete to seven. enter runs 'ls seven' command.

It cannot be overstated how useful tab completion is. You should get used to using it constantly. Watch experienced users type and they maniacally hit tab once or twice in between almost every character. You don't have to go that far, of course, but get used to constantly getting feedback from hitting tab and you will save yourself a huge amount of typing and trying to remember weird directory and filenames.

## Quiz 2

<div id="quiz2" class="quiz"></div>
<button id="submit2">Submit Quiz</button>
<div id="results2" class="output"></div>
<script>
quizContainer2 = document.getElementById('quiz2');
resultsContainer2 = document.getElementById('results2');
submitButton2 = document.getElementById('submit2');

myQuestions2 = [
  {
    question: "What is the tilde short for?",
    answers: {
      a: "Your home directory",
      b: "Your user name",
      c: "Your current directory",
      d: "The root directory"
    },
    correctAnswer: "a"
  },
  {
    question: "From the /usr/bin directory, verify that the two following commands are equivalent:<br/><br/>cd ../../lib/init/<br/>cd ../../../../../../../lib/init<br/><br/>Why are these very different-looking commands equivalent?",
    answers: {
      a: "The cd command knows where your home directory resides",
      b: "The terminal ignores excess dots",
      c: "Because going one directory up from root just takes you back to root",
      d: "Home is the root directory"
    },
    correctAnswer: "c"
  }
];

buildQuiz(myQuestions2, quizContainer2);
submitButton2.addEventListener('click', function() {showResults(myQuestions2, quizContainer2, resultsContainer2);});
</script>



## History Repeats Itself

Linux remembers everything you've done (at least in the current shell session), which allows you to pull steps from your history, potentially modify them, and redo them. This can obviously save a lot of time and typing.

The 'head' command views the first 10 (by default) lines of a file. The 'tail' commands views the last 10 (by default) lines of a file. Type 'man head' or 'man tail' to consult their manuals.

    <up arrow>  # last command
    <up>  # next-to-last command
    <down>  # last command, again
    <down>  # current command, empty or otherwise
    history  # usually too much for one screen, so ...
    history | head # we discuss pipes (the vertical bar) below
    history | tail
    history | less # use 'q' to exit less
    ls -l
    pwd
    history | tail
    !560  # re-executes 560th command (yours will have different numbers; choose the one that recreates your really important result!)

## Editing Yourself

Here are some more ways to make editing previous commands, or novel commands that you're building up, easier:

    <up><up>  # go to some previous command, just to have something to work on
    <ctrl-a>  # go to the beginning of the line
    <ctrl-e>  # go to the end of the line
    # now use left and right to move to a single word (surrounded by whitespace: spaces or tabs)
    <ctrl-k>  # delete from here to end of line
    <ctrl-w>  # delete from here to beginning of preceeding word
    blah blah blah<ctrl-w><ctrl-w>  # leaves you with only one 'blah'

You can also search your history from the command line:

    <ctrl-r>fir  # should find most recent command containing 'fir' string: echo 'first' > test.txt
    <enter>  # to run command
    <ctrl-c>  # get out of recursive search
    <ctr-r>  # repeat <ctrl-r> to find successively older string matches


## Create and Destroy

We already learned one command that will create a file, touch. Now let's look at create and removing files and directories.

    cd  # home again
    mkdir ~/tmp2
    cd ~/tmp2
    echo 'Hello, world!' > first.txt

echo text then redirect ('>') to a file.

    cat first.txt  # 'cat' means 'concatenate', or just spit the contents of the file to the screen

why 'concatenate'? try this:

    cat first.txt first.txt first.txt > second.txt
    cat second.txt

OK, let's destroy what we just created:

    cd ../
    rmdir tmp2  # 'rmdir' meands 'remove directory', but this shouldn't work!
    rm tmp2/first.txt
    rm tmp2/second.txt  # clear directory first
    rmdir tmp2  # should succeed now

So, 'mkdir' and 'rmdir' are used to create and destroy (empty) directories. 'rm' to remove files. To create a file can be as simple as using 'echo' and the '>' (redirection) character to put text into a file. Even simpler is the 'touch' command.

    mkdir ~/cli
    cd ~/cli
    touch newFile
    ls -ltra  # look at the time listed for the file you just created
    cat newFile  # it's empty!
    sleep 60  # go grab some coffee
    touch newFile
    ls -ltra  # same time?

So 'touch' creates empty files, or updates the 'last modified' time. Note that the options on the 'ls' command you used here give you a Long listing, of All files, in Reverse Time order (l, a, r, t).

## Forced Removal

When you're on the command line, there's no 'Recycle Bin'. Since we've expanded a whole directory tree, we need to be able to quickly remove a directory without clearing each subdirectory and using 'rmdir'.

    cd
    mkdir -p rmtest/dir1/dir2 # the -p option creates all the directories at once
    rmdir rmtest # gives an error since rmdir can only remove directories that are empty
    rm -rf rmtest # will remove the directory and EVERYTHING in it

Here -r = recursively remove sub-directories, -f means *force*. Obviously, be careful with 'rm -rf', there is no going back, if you delete something with rm, rmdir its gone! **There is no Recycle Bin on the Command-Line!**

## Quiz 3

<div id="quiz3" class="quiz"></div>
<button id="submit3">Submit Quiz</button>
<div id="results3" class="output"></div>
<script>
quizContainer3 = document.getElementById('quiz3');
resultsContainer3 = document.getElementById('results3');
submitButton3 = document.getElementById('submit3');

myQuestions3 = [
  {
    question: "In the command 'rm -rf rmtest', what is 'rmtest'?",
    answers: {
      a: "An option",
      b: "An argument",
      c: "A command",
      d: "A choice"
    },
    correctAnswer: "b"
  },
  {
    question: "Make a directory called test and then run 'rm test'. What happens?",
    answers: {
      a: "Nothing happens",
      b: "The directory is removed",
      c: "The terminal exits",
      d: "You get an error message"
    },
    correctAnswer: "d"
  }
];

buildQuiz(myQuestions3, quizContainer3);
submitButton3.addEventListener('click', function() {showResults(myQuestions3, quizContainer3, resultsContainer3);});
</script>

## Piping and Redirection

Pipes ('\|') allow commands to hand output to other commands, and redirection characters ('>' and '>>') allow you to put output into files.

    echo 'first' > test.txt
    cat test.txt # outputs the contents of the file to the terminal
    echo 'second' > test.txt
    cat test.txt
    echo 'third' >> test.txt
    cat test.txt

The '>' character redirects output of a command that would normally go to the screen instead into a specified file. '>' overwrites the file, '>>' appends to the file.

The 'cut' command pieces of lines from a file line by line. This command cuts characters 1 to 3, from every line, from file 'test.txt'

    cut -c 1-3 test.txt  

same thing, piping output of one command into input of another

    cat test.txt | cut -c 1-3  

This pipes (i.e., sends the output of) cat to cut to sort (-r means reverse order sort), and then grep searches for pattern ('s') matches (i.e. for any line where an 's' appears anywhere on the line.)

    cat test.txt | cut -c 1-3 | sort -r
    cat test.txt | cut -c 1-3 | sort -r | grep s

This is a great way to build up a set of operations while inspecting the output of each step in turn. We'll do more of this in a bit.


## Compression and Archives

As file sizes get large, you'll often see compressed files, or whole compressed folders. Note that **any good bioinformatics software** should be able to work with compressed file formats. 

    gzip test.txt
    cat test.txt.gz

To uncompress a file

    gunzip -c test.txt.gz

The '-c' leaves the original file alone, but dumps expanded output to screen

    gunzip test.txt.gz  # now the file should change back to uncompressed test.txt

Tape archives, or .tar files, are one way to compress entire folders and all contained folders into one file. When they're further compressed they're called 'tarballs'. We can use wget (web get).

    wget -L -O PhiX_Illumina_RTA.tar.gz http://igenomes.illumina.com.s3-website-us-east-1.amazonaws.com/PhiX/Illumina/RTA/PhiX_Illumina_RTA.tar.gz

The .tar.gz and .tgz are *commonly used* extensions for compressed tar files, when gzip compression is used. The application tar is used to uncompress .tar files

    tar -xzvf PhiX_Illumina_RTA.tar.gz

Here -x = extract, -z = use gzip/gunzip, -v = verbose (show each file in archive), -f filename

Note that, unlike Windows, linux does not depend on file extensions to determine file behavior. So you could name a tarball 'fish.puppy' and the extract command above should work just fine. The only thing that should be different is that tab-completion doesn't work within the 'tar' command if it doesn't see the 'correct' file extension.    


## BASH Wildcard Characters

We can use 'wildcard characters' when we want to specify or operate on sets of files all at once.

    ls ?hiX/Illumina

list files in Illumina sub-directory of any directory ending in 'hiX'

    ls PhiX/Illumina/RTA/Sequence/*/*.fa

list all files ending in '.fa' a few directories down. So, '?' fills in for zero or one character, '\*' fills in for zero or more characters. The 'find' command can be used to locate files using a similar form.

    find . -name "*.f*"
    find . -name "*.f?"

how is this different from the previous ls commands?

#### Quick Note About the Quote(s)

The quote characters " and ' are different. In general, single quotes preserve the *literal* meaning of all characters between them. On the other hand, double quotes allow the shell to see what's between them and make substitutions when appropriate. For example:

    VRBL=someText
    echo '$VRBL'
    echo "$VRBL"

However, some commands try to be 'smarter' about this behavior, so it's a little hard to predict what will happen in all cases. It's safest to experiment first when planning a command that depends on quoting ... list filenames first, instead of changing them, etc. Finally, the 'backtick' characters \` (same key - unSHIFTED - as the tilde ~) causes the shell to interpret what's between them as a command, and return the result.

     # counts the number of lines in file and stores result in the LINES variable
    LINES=`cat PhiX/Illumina/RTA/Sequence/Bowtie2Index/genome.1.bt2 | wc -l` 
    echo $LINES


## Symbolic Links

Since copying or even moving large files (like sequence data) around your filesystem may be impractical, we can use links to reference 'distant' files without duplicating the data in the files. Symbolic links are disposable pointers that refer to other files, but behave like the referenced files in commands. I.e., they are essentially 'Shortcuts' (to use a Windows term) to a file or directory.

The 'ln' command creates a link. **You should, by default, always create a symbolic link using the -s option.**

    ln -s PhiX/Illumina/RTA/Sequence/WholeGenomeFasta/genome.fa .
    ls -ltrhaF  # notice the symbolic link pointing at its target
    grep -c ">" genome.fa

## STDOUT & STDERR

Programs can write to two separate output streams, 'standard out' (STDOUT), and 'standard error' (STDERR). The former is generally for direct output of a program, while the latter is supposed to be used for reporting problems. I've seen some bioinformatics tools use STDERR to report summary statistics about the output, but this is probably bad practice. Default behavior in a lot of cases is to dump both STDOUT and STDERR to the screen, unless you specify otherwise. In order to nail down what goes where, and record it for posterity:

    wc -c genome.fa 1> chars.txt 2> any.err

the 1st output, STDOUT, goes to 'chars.txt'  
the 2nd output, STDERR, goes to 'any.err'  

    cat chars.txt

Contains the character count of the file genome.fa

    cat any.err

Empty since no errors occured.

Saving STDOUT is pretty routine (you want your results, yes?), but remember that explicitly saving STDERR is important on a remote server, since you may not directly see the 'screen' when you're running jobs.


## Quiz 4

<div id="quiz4" class="quiz"></div>
<button id="submit4">Submit Quiz</button>
<div id="results4" class="output"></div>
<script>
quizContainer4 = document.getElementById('quiz4');
resultsContainer4 = document.getElementById('results4');
submitButton4 = document.getElementById('submit4');

myQuestions4 = [
  {
    question: "In the PhiX directory, count the number of the files ending in '.fa'. You will need to use the 'wc' command:",
    answers: {
      a: "15",
      b: "9",
      c: "7",
      d: "10"
    },
    correctAnswer: "d"
  },
  {
    question: "Which of the following commands will list all of the txt files in all the 'Genes' directories underneath the 'Archives' directory?",
    answers: {
      a: "ls PhiX/Illumina/RTA/*o*/Archives/*/*/*.txt",
      b: "ls PhiX/Illumina/RTA/A*/Archives/*/*.txt",
      c: "ls PhiX/Illumina/RTA/S*/Archives/*/*/*.txt",
      d: "ls PhiX/Illumina/RTA/Annotation/Genes/*.text"
    },
    correctAnswer: "a"
  },
  {
    question: "Find 'genome.fa' file in the PhiX directory. Use pipes to get characters 640 to 700 in the second line of the file:",
    answers: {
      a: "GCTCGTCGCTGCGTTGAGGCTTGCGTTTATGGTACGCTGGACTTTGTAGGATACCCTCGCT",
      b: "TATTAAGCTCATTCAGGCTTCTGCCGTTTTGGATTTAACCGAAGATGATTTCGATTTTCTG",
      c: "ATTATGTTCATCCCGTCAACATTCAAACGGCCTGTCTCATCATGGAAGGCGCTGAATTTAC",
      d: "GGATTACTATCTGAGTCCGATGCTGTTCAACCACTAATAGGTAAGAAATCATGAGTCAAGT"
    },
    correctAnswer: "c"
  }
];

buildQuiz(myQuestions4, quizContainer4);
submitButton4.addEventListener('click', function() {showResults(myQuestions4, quizContainer4, resultsContainer4);});
</script>


## Shell Scripts, File Permissions

Often it's useful to define a whole string of commands to run on some input, so that (1) you can be sure you're running the same commands on all data, and (2) so you don't have to type the same commands in over and over! Let's use the 'nano' text editor program that's pretty reliably installed on most linux systems.

    nano test.sh

<img src="figures/cli_figure7.png" alt="cli_figure7" width="800px"/>

nano now occupies the whole screen; see commands at the bottom. Let's type in a few commands. First we need to put the following line at the top of the file:

<div class="script">
#!/bin/bash
</div>

The "#!" at the beginning of a script tells the shell what language to use to interpret the rest of the script. In our case, we will be writing "bash" commands, so we specify the full path of the bash executable after the "#!". Then, add some commands:

<div class="script">
#!/bin/bash

echo "Start script..."
pwd
ls -l
sleep 10
echo "End script."
</div>

Hit Cntl-O and then enter to save the file, and then Cntl-X to exit nano.

Though there are ways to run the commands in test.sh right now, it's generally useful to give yourself (and others) 'execute' permissions for test.sh, really making it a shell script. Note the characters in the first (left-most) field of the file listing:

    ls -lh test.sh

<div class="output">-rw-rw-r-- 1 msettles biocore 79 Aug 19 15:05 test.sh
</div>


The first '-' becomes a 'd' if the 'file' is actually a directory. The next three characters represent **r**ead, **w**rite, and e**x**ecute permissions for the file owner (you), followed by three characters for users in the owner's group, followed by three characters for all other users. Run the 'chmod' command to change permissions for the 'test.sh' file, adding execute permissions ('+x') for the user (you) and your group ('ug'):

    chmod ug+x test.sh
    ls -lh test.sh

<div class="output">-rwxr-xr-- 1 msettles biocore 79 Aug 19 15:05 test.sh
</div>

The first 10 characters of the output represent the file and permissions.
The first character is the file type, the next three sets of three represent the file permissions for the user, group, and everyone respectively.
- r = read
- w = write
- x = execute

So let's run this script. We have to provide a relative reference to the script './' because its not our our "PATH".:

    ./test.sh

And you should see all the commands in the file run in sequential order in the terminal.
