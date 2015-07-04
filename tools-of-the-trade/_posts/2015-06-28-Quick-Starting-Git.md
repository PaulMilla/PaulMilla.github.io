---
layout: post
title: Quick Starting Git
---

One of the first tools, if not the first tool I would recommend students learn is git (after learning terminal basics, of course). While git can be a little confusing to understand at first, once you learn it's secrets, the conecpts of a version control system can easily carry you well into a development career. Along the way I've picked up on a couple of gems that I've found essential to my git workflow, some of which I hope can help kick-start someone else's git experience.

## [Saving credentials](https://help.github.com/articles/set-up-git/#next-steps-authenticating-with-github-from-git)

When you want to clone your class' and repository you have to put in your GitHub credentials, then you start working on it and want to push it up and you have to put in your GitHub credentials, then you switch computers and try to pull your update and you have to put in your GitHub credentials AGAIN, and this happens EVERY TIME. Doesn't that get anoying after a while? Thankfully there's an easy fix to that. Queue git's [credential helper](https://help.github.com/articles/caching-your-github-password-in-git/#platform-mac). Basically it sums down to these couple of commands:

#### Linux
``` bash
# Set git to use the credential memory cache
$ git config --global credential.helper cache

# Set the cache to timeout after 1 hour (setting is in seconds)
$ git config --global credential.helper 'cache --timeout=3600'
```

#### Mac
1. First check to see if osxkeychain is installed:

    ``` bash
    # Test for the cred helper
    $ git credential-osxkeychain
    ```

    A successfuly message will look like so and can be moved on to step 3:

    ``` bash
    Usage: git credential-osxkeychain <get|store|erase>
    ```

    Else you will get the following error, meaning you will need to install in step 2:

    ``` bash
    git: 'credential-osxkeychain' is not a git command. See 'git --help'.
    ```

2. You can install osxkeychain via curl:

    ``` bash
    # Download the helper
    $ curl -s -O https://github-media-downloads.s3.amazonaws.com/osx/git-credential-osxkeychain

    # Fix the permissions on the file so it can be run
    $ chmod u+x git-crednetial-osxkeychain

    # Move the helper to the path where git is installed
    $ sudo mv git-credential-osxkeychain "$(dirname $(which git))/git-credential-osxkeychain"
    Password: [enter your password]
    ```

3. Lastly set up git to use osxkeychain:

    ``` bash
    # Set git to use the osxkeychain credential helper
    $ git config --global credential.helper osxkeychain
    ```

#### Windows
I would honestly recommend downloading the [GitHub for Windows](https://windows.github.com/) application as it comes with a GUI interface, auto SSH key management, and a Git Shell that mimics a linux terminal along with tab completion for Git commands.


## [Git Completion] (https://github.com/git/git/tree/master/contrib/completion)

Tab completion is great. Even when you know what you want to type, it's so much nicer to only type the first couple of letters, press tab, and then have the computer read your mind. Well, the terminal already does tab completion for many of our other functions, why not get it to tab complete our git commands as well? Well, by using a handy git-completion script we can!

#### Step 1: Download [git-completion.bash](https://github.com/git/git/blob/master/contrib/completion/git-completion.bash)
Since this guide is aimed at beginners I'm assuming the use of a bash terminal. In such case you can go to https://github.com/git/git/blob/master/contrib/completion/git-completion.bash and download the file via right-clicking "Raw" > "Save Link As". I would suggest saving this file in your home directory (/home/<user>/), and renaming it to ".gitcompletion.bash" (notice the leading period). It's not typically a file you'll care to see everytime you "ls" in your home directory, but since it's only use is to be included in your .bashrc file I like to keep them close.

#### Step 2: Add it to your .bashrc file
The last step is to add the following line to your .bashrc file:
``` bash
source ~/.git-completion.bash
```
If you saved it under a different name and/or a different location than your home directory then you'll need to change the location after the source.

If you don't have a .bashrc file I'd suggest taking a look at [Quick Starting Bash](/tools-of-the-trade/Quick-Starting-Bash/). You'll likely end up spending plenty of time in the terminal window, so configuring it to your needs can really pay off.
