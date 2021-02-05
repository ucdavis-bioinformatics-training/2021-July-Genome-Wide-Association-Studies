Environment variables
---------------------

In Linux, environment variables act as placeholders for information stored within the system that passes data to programs launched in your shell. To look at most of the environment variables currently in your shell, use the **env** command:

    env

In order to see the value of any one variable, you can "echo" the value using a "$" in front of the variable name:

    echo $USER

This gives you your user ID. Some of the most commonly used environment variables are USER, HOSTNAME, SHELL, EDITOR, TERM, and PATH.

You can also create your own environment variables:

    MYVAR=1
    echo $MYVAR

By convention, variable names are in all caps, but they don't have to be. You can then update the variable as well:

    MYVAR=2
    echo $MYVAR

In order to use any environment variable in a program that you execute from the command-line, you need to use the **export** command:

    export MYVAR=3

You can also use backticks (`) to execute a command and send the output into a variable:

    MYVAR=`pwd`
    echo $MYVAR


.bashrc/.bash_profile, aliases & the PATH variable
-----------------------------------------------------

On a Linux system, there is usually a user-modifiable file of commands that gets run every time you log in. This is used to set up your environment the way that you want it. On our systems, the file is ".bash_profile" and it resides in your home directory. Sometimes the file is called ".bashrc" as well. Take a look at a .bash_profile:

    cat /share/workshop/.bash_profile

This one has a lot of stuff in it to set up the environment. Now take a look at your own .bash_profile. One of the things you set up was adding to the PATH variable. One thing that is very useful to add to the PATH variable is the "." directory. This allows you to execute things that are in your current directory, specified by ".". So, let's use nano to edit our .bash_profile and add "." to PATH:

    nano ~/.bash_profile

Add ":." to the PATH variable by adding this line:

**export PATH=$PATH:.**

 Now, next time you log in, "." will be in your PATH.

Another thing that is very useful are aliases. An alias is a user-defined command that is a shortcut for another command. For example, let's say you typed the command "ls -ltrh" a lot and it would be easier to have it be a simpler command. Use an alias:

    alias lt='ls -ltrh'

Now, you've created an alias that lists the contents of a directory with extra information (-l), in reverse time order of last modified (-r and -t), and with human readable file sizes (-h). Try it out:

    lt

Typing alias by itself give you a list of all the aliases:

    alias

You can now put the alias command for lt in your .bash_profile and you will have it automatically when you log in.

