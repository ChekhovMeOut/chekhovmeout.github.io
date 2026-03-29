---
public: true
---

### <span style="color:#00b050">Windows Terminal (PowerShell)</span>
- not case sensitive at all
- Tab and shift+tab to autocomplete or select from results
```powershell
# Navigation
	# change directory
		# argument "\" goes to top level directory
		# argument " .." or ".." to move upward to parent directory 
		# argument "folder1/subfolder1" to move through multiple directories 
	cd
	# show all items in currrent directory
	dir
	# show file contents

# Manipulations
	# make a new folder. Use "first last name" if you want to use spaces
	mkdir name
	# specifying filpath from C: allows you to make folders anywhere 
	mkdir C:\users\wiatr\Desktop\name
	# rename name1.extension file to name2.extension. Folders don't need an extension
	ren name1.txt name2.txt 



```

### <span style="color:#00b080">GitBash</span>
- You have to say git before every command? I guess
- Directories are supposed to be forward slash ```cd /c/users/wiatr/PycharmProjects/```
```bash
# All
	# Dir command analog
	pwd
	# Kind of like Dir. Tells you what commit and branch status is.
	git status
	# Add filename.extension to commit. use --all to add everything in directory
	git add myfirstscript.py
	git add --all
	# Seals anything added to a commitment with the explanitory comment
	git commit -am "Version 1.2 with updated data structure"
	# Sends the commit to Github.com and publishes it
	git push
	#
```

### <span style="color:#7030a0">Unix Commands</span>
- Tab and shift+tab to autocomplete or select from results
```shell
# Navigation
	# change directory
		# arg " /" goes to top level directory (root)
		# arg" ~" goes to home directory
		# arg " .." or ".." to move upward to parent directory 
		# arg "folder1/subfolder1" to move through multiple directories 
		# arg " -" moves to previous directory, like a back arrow
	cd <dir1/subdir1>
	# List files and subdirectories in current directory
		# arg "-a" reveals hidden
		# arg "-d" shows only directories
		# arg "-t" sort by time & date
		# arg "-l" show in long format
	ls 
	# Show full path to current directory
	pwd
# Manipulation
	# Display file. Doesn't really open it
	cat <file_name>
	more <file_name>
	# Remove file. Be careful
		# arg "-r" allows deleting directory, and all its contents
		# arg "-i" prompt before each removal. Alows filtering
	rm 
	# Copy or move file. Must be in current directory
	cp <target> <destination>
	mv <target> <destination>
# Execution
	# Start core process 
	srun 
	# Display running processes
	sacct -n
```

### Putty
in /program files/putty/
putty.exe -ssh wiatric.i@login.discovery.neu.edu 22
putty.exe -load "disc"