# Notes

## GitHub
GitHub is awesome and a fun time. Had a hard time figuring out VS Code and git, but YouTube is very handy. Some notes about GitHub:
- GitHub stores and shares my repositories online. To prevent merge errors, I should do most of my editing in VS
- git config --global user.email "you@example.com"
- git config --global user.name "Your name"
- **clones** allow you to edit your repository remotely
- **forks** are for experimenting with other people's code and creating varients of it
- **pull**, **add**, **commit**, **push**
- use branches: keeps code safe and allows you to retrace steps

## Consol Commands
- **echo** - Output the parameters of the command
- **cd** - Change directory
- **mkdir** - Make directory
- **rmdir** - Remove directory
- **rm** - Remove file(s)
- **mv** - Move file(s)
- **cp** - Copy files
- **ls** - List files
- **curl** - Command line client URL browser
- **grep** - Regular expression search
- **find** - Find files
- **top** - View running processes with CPU and memory usage
- **df** - View disk statistics
- **cat** - Output the contents of a file
- **less** - Interactively output the contents of a file
- **wc** - Count the words in a file
- **ps** - View the currently running processes
- **kill** - Kill a currently running process
- **sudo** - Execute a command as a super user (admin)
- **ssh** - Create a secure shell on a remote computer
- **scp** - Securely copy files to a remote computer
- **history** - Show the history of commands
- **ping** - Check if a website is up
- **tracert** - Trace the connections to a website
- **dig** - Show the DNS information for a domain
- **man** - Look up a command in the manual
- `|` - Take the output from the command on the left and _pipe_, or pass, it to the command on the right
- `>` - Redirect output to a file. Overwrites the file if it exists
- `>>` - Redirect output to a file. Appends if the file exists

## Server - Amazon Web Services
- Elastic IP: 3.215.127.79
- > ➜  ssh -i ~/keys/production.pem ubuntu@53.104.2.123'

## HTML
- use tags: <>, </>
- start with > !DOCTYPE html
- for structuring sites
- can do videos, images, and input too
- give elements an id to easily refer to them later
- html	The page container
- head	Header information
- title	Title of the page
- meta	Metadata for the page such as character set or viewport settings
- script	JavaScript reference. Either a external reference, or inline
- include	External content reference
- body	The entire content body of the page
- header	Header of the main content
- footer	Footer of the main content
- nav	Navigational inputs
- main	Main content of the page
- section	A section of the main content
- aside	Aside content from the main content
- div	A block division of content
- span	An inline span of content
- h<1-9>	Text heading. From h1, the highest level, down to h9, the lowest level
- p	A paragraph of text
- b	Bring attention
- table	Table
- tr	Table row
- th	Table header
- td	Table data
- ol,ul	Ordered or unordered list
- li	List item
- a	Anchor the text to a hyperlink
- img	Graphical image reference
- dialog	Interactive component such as a confirmation
- form	A collection of user input
- input	User input field
- audio	Audio content
- video	Video content
- svg	Scalable vector graphic content
- iframe	Inline frame of another HTML page

## CSS
- **#** for ids
- **.** for class
- flex box

## JavaScript
- function
- arrow function - (parameters) => function
- promises and promise chains
- regular expressions start and end with **/**
- ex: **/ab*c/** (single **a** followed by some number of **b**'s and a single **c**)
- ending with **i** means not case sensitive

## Node
- Create your project directory
- Initialize it for use with NPM by running npm init -y
- Make sure .gitignore file contains node_modules
- Install any desired packages with npm install <package name here>
- Add require('<package name here>') to your application's JavaScript
- Use the code the package provides in your JavaScript
- Run your code with node index.js
