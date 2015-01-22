[Table of Contents](readme.md)

# Setting up Sublime Text 

### 1. Download Sublime Text from [Sublime Text](http://www.sublimetext.com/)

### 2. Create a symlink (symbolic link) to open Sublime from your console.

Here are some guides:

##OSX##

```
ln -fs "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
```

also check out the [Official Guide](https://www.sublimetext.com/docs/2/osx_command_line.html).

##Windows##

[Windows instructions](http://stackoverflow.com/questions/9440639/sublime-text-from-command-line-win7)

##Linux##

[Ubuntu instructions](http://askubuntu.com/questions/172698/how-do-i-install-sublime-text-2/227617#227617)

### 3. Add Sublime as your default editor for git:

```git config --global core.editor "subl -w"```

And here is how you can make it the default for the finder app in your OS:

[OSX](http://www.youtube.com/watch?v=iMpYa5WZUTg)

[Windows (manual setup)](http://stackoverflow.com/questions/9450895/sublime-as-default-editor) OR [Windows ("automatic" setup)](https://github.com/grumpydev/Sublime-Notepad-Replacement)

[Ubuntu](http://askubuntu.com/questions/396938/how-do-i-make-sublime-text-3-the-default-text-editor)


# Sublime Hotkeys

Here is a reference for Sublime Text shortcuts pick 1 or 2 everytime you start a challenge 

[Sublime Shortcut OSX](http://sublime-text-unofficial-documentation.readthedocs.org/en/latest/reference/keyboard_shortcuts_osx.html)

[Windows/linux](http://sublime-text-unofficial-documentation.readthedocs.org/en/latest/reference/keyboard_shortcuts_win.html)

Here are a few that I find I use all the time:

cmd + &#8592; OR &#8594;  go to beginning or end of line from cursors current location, combine with shift to highlight the whole line.

option/alt + &#8592; OR &#8594; jump by word instead of character.

option/alt + click and drag  box style highlighting, also an easy way to create many cursors.

cmd + d find next instance of highlighted word, easily replace key words!

cmd + p quick open file, just start typing the name of the file. 

cmd + shift + V paste and indent correctly. 

cmd + y redo, opposite of undo.

cmd + x delete line.

cmd + ctrl + &#8593; OR &#8595; bubble line up or down.

cmd + / comment or uncomment selected text/line.

cmd + [ or ] indent or un-indent line or selected lines.

cmd + shift + p open command prompt. 












