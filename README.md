ç# Task runner


## Dependencies

1. Latest version of [NodeJS](http://nodejs.org/) (min v0.12.2)

2. Windows only - [GitBash](http://git-scm.com/downloads) (used instead of cmd)

3. Windows only - [GraphicsMagick](http://sourceforge.net/projects/graphicsmagick/files/graphicsmagick-binaries/1.3.21/)


## App installation

$ `npm install --global gulp && npm install` (use GitBash on Windows / Terminal on OSX) in the directory of the project. Accept all requests. If error occurs, run again.


## Running the app

This should be used every time when you start working on the project:

$ `gulp` (use GitBash on Windows / Terminal on OSX) in the directory of the project


## Build the app

$ `gulp build` (use GitBash on Windows / Terminal on OSX) in the directory of the project


## Build the blog through jekyll
Goto blog directory then execute folling command.

$ `jekyll build` (use GitBash on Windows / Terminal on OSX) in the blog directory of the project.

After building the blog, we need to copy the generated blog post to build folder of project.

$ `gulp blog:publish`