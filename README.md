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
$ enjoy it!
```
And then open `localhost:8080`.  

## Included templates
- Web Application with React
- React Library

![](./images/img1.png)

## Directory Structure of the Generated Project
### Web Application with React
```
.
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc
├── .flowconfig
├── .gitignore
├── .travis.yml
├── LICENSE
├── README.md
├── index.html
├── src
│   ├── components
│   │   └── Hero
│   │       ├── Hero.js
│   │       ├── hero.style.css
│   │       └── index.js
│   ├── index.js
│   └── styles
│       ├── _mixins.css
│       ├── _variables.css
│       └── mixins
│           └── _hero-background.css
├── test
│   ├── helpers
│   │   └── setup-browser-env.js
│   └── hero.js
├── webpack.config.js
└── webpack.production.config.js
```

### React Library
```
.
├── LICENSE
├── README.md
├── examples
│   ├── index.html
│   ├── main.js
│   ├── package.json
│   └── webpack.config.js
├── lib
│   ├── components
│   │   └── Hero.js
│   └── index.js
└── package.json
```

## Web Application with React
### Tools
- webpack
  - webpack-dev-server
  - webpack-dashboard
- babel
  - latest
  - stage-0
- eslint
- flow

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
