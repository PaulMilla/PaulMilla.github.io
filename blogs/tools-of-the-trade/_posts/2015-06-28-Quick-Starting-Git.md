---
layout: post
title: Quick Starting Git
---

One of the first tools, if not the first tool I would recommend students learn is git (after learning terminal basics, of course). While git can be a little confusing to understand at first, once you learn it's secrets, the conecepts of a version control system can easily carry you well into a development career. Along the way I've picked up on a couple of gems that I've found essential to my git workflow, some of which I hope can help kick-start someone else's git experience.

## [Saving credentials](https://help.github.com/articles/set-up-git/#next-steps-authenticating-with-github-from-git)

When you want to clone your class' and repository you have to put in your GitHub credentials, then you start working on it and want to push it up and you have to put in your GitHub credentials, then you switch computers and try to pull your update and you have to put in your GitHub credentials AGAIN, and this happens EVERY TIME. Doesn't that get annoying after a while? Thankfully there's an easy fix to that. Queue git's [credential helper](https://help.github.com/articles/caching-your-github-password-in-git/#platform-mac). Basically it sums down to these couple of commands:

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
I would honestly recommend downloading the [GitHub for Windows](https://windows.github.com/) application as it comes with a GUI interface, auto SSH key management, and a Git Shell that mimics a Linux terminal along with tab completion for Git commands.



## [Adding Hub](https://github.com/github/hub)

If you're like me you're using GitHub constantly. Any coding projects start on GitHub and then imported into BitBucket when I need more private repos. As it turns out GitHub has it's own command line utility called hub. It functions as a wrapper for the regular git command as well as adding some extra functionality for interacting with github.com. Since it knows who you are, cloning one of your repositories can be as simple as `git clone $REPO_NAME`, setting the remote can be just `git remote add origin`, and instead of going to the website to open a pull request you can just type `git pull-request`.

Unfortunately it seems like most of the extra functions aren't implemented on the linux version yet, so the biggest appeal for linux is the automatic GitHub OAuth token, which will store a token under `~/.config/hub` instead of storing any username/password credentials.

#### Mac
To install hub on a mac it's really just as easy as.

``` bash
$ brew install hub
```

#### Linux
Linux is a bit trickier since it's not in any package manager yet and as a result we'll need to download the precompiled binary and then put it somewhere in our $PATH. Since `/usr/local/bin` is in our $PATH we'll be placing it there.

``` bash
$ wget https://github.com/github/hub/releases/download/v2.2.1/hub-linux-386-2.2.1.tar.gz
$ tar -xvzf hub-linux-386-2.2.1.tar.gz
$ cd hub-linux-386-2.2.1.tar.gz
$ cp hub /usr/local/bin
$ hub --version
```
Another option if you don't have permission to /usr/local/bin is to have a `~/.local/bin` folder and add it to your $PATH manually. If you have installed an application locally before then it's likely you already have a `~/.local/bin` directory set up. If so just make sure you have `PATH=~/.local/bin:$PATH` somewhere in your .bashrc file and you're good to go.

``` bash
$ mkdir ~/.local/bin
$ cp hub ~/.local/bin
$ echo "PATH=~/.local/bin:$PATH" >> .bashrc
```

Lastly since hub is a superset of git we can confidently alias hub to replace git by adding '`alias git=hub`' to our .bashrc file.


## [Git Completion] (https://github.com/git/git/blob/master/contrib/completion/git-completion.bash)

Tab completion is great. Even when you know what you want to type, it's much nicer to only type the first couple of letters, press tab, and then have the computer read your mind. The terminal already does tab completion for many of our other functions, why not get it to tab complete our git commands as well? By using a handy git-completion script we can!

You only need the tab complete for the command that you're using. Installing the git completion when using hub does nothing, even if hub is aliased as git.

Since we're already working in the terminal we can download it from the command line using `wget` and save it as `.hub.bash_completion.sh` (notice the leading period) in our home directory with the `-O` flag.

``` bash
# download hub tab completion
$ wget -O ~/.hub.bash_completion.sh https://github.com/github/hub/raw/master/etc/hub.bash_completion.sh

# download git tab completion
$ wget -O ~/.git-completion.bash https://github.com/git/git/raw/master/contrib/completion/git-completion.bash
```

Lastly we'll need to run the script every time we open a terminal window. We can do that by adding the following lines in our .bashrc file.

``` bash
# set up hub tab auto-completion
source ~/.hub.bash_completion.sh

# set up git tab auto-completion
source ~/.git-completion.bash
```

We didn't have to rename or move it, but since this goes hand in hand with our .bashrc file I like to keep them close. Also I don't exactly care to see it every time I type `ls`. If you decide not to move or rename the file then you'll need to change your .bashrc file accordingly.
