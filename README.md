# gulpfile

## Installation
    npm install

## Directory

    ├── gulpfile.js
    ├── package.json
    ├── src
    |   ├── js
    |   |   ├── index.js
    |   |   ├── app
    |   |   |   ├── App.js              #route component
    |   |   |   ├── reducer.js          #route reducers
    |   |   |   └── ...<Appname>.js     #component with container only
    |   |   └── ...<appname>
    |   |   |   ├── <Appname>.js        #component & container
    |   |   |   ├── <Appname>Actions.js
    |   |   |   ├── <appname>Reducer.js
    |   |   |   └── <Appname><Componentname>.js
    |   └── scss
    |       └── *.scss
    ├── dist
    |   ├── js
    |   |   └── *.js
    |   └── css
    |       └── *.css
    └── html
        └── *.html

## Access
  [http://localhost:3000/html/sample.html](http://localhost:3000/html/sample.html)

## Functions
* browserify - enable rollups in javascript
* babel - transcompile jsx and es2015 to es5
* browser-sync - reload browser automatically when files are updated
* scss - transcompile scss to css
* rework - enable rollups in scss

## Frontend libraries
(Remove from package.json before `npm install` if you don't need them)
* jQuery
* bootstrap
* react
* redux
* redux-react
* react-bootstrap

