<div align="center">
  <h1>Dish</h1>
</div>

<div align="center">
  <strong>template for frontend application</strong>
</div>

[![Build Status](https://travis-ci.org/abouthiroppy/dish.svg?branch=master)](https://travis-ci.org/abouthiroppy/dish)
[![codecov](https://codecov.io/gh/abouthiroppy/dish/branch/master/graph/badge.svg)](https://codecov.io/gh/abouthiroppy/dish)

## Usage
```
$ npm install -g my-dish
$ dish <project-directory>
$ cd <project-directory>
$ npm start or npm run build
```
And then open `localhost:8080`.  

## Directory Structure of the Generated Project
```
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .travis.yml
├── LICENSE
├── README.md
├── index.html
├── src
│   ├── common.css
│   ├── components
│   │   └── Hero
│   │       ├── Hero.js
│   │       ├── hero.style.css
│   │       └── index.js
│   └── index.js
├── test
│   ├── helpers
│   │   └── setup-browser-env.js
│   └── hero.js
├── webpack.config.js
└── webpack.production.config.js
```

## npm start
Start as development.  
Default port is 8080.  
Dish uses [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard) and [webpack-dev-server](https://github.com/webpack/webpack-dev-server).

## npm test
Test runner is [ava](https://github.com/avajs/ava).

## npm run build
Build as production.  
Source codes is compressed by webpack.  
If you don't want to include the css in js, you can uncomment `extract-text-webpack-plugin` in `webpack.production.config.js`.

## Tools
- webpack
  - webpack-dev-server
  - webpack-dashboard
- babel
  - es2015
  - stage-0
  - stage-1
- eslint

## Frameworks
- react
- postcss(use css-modules)
  - precss
  - autoprefixer

## Testing Tools
- ava
- enzyme
- jsdom
- sinon
