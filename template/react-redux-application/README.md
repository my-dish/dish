<div align="center">
  <h1>Dish</h1>
</div>

<div align="center">
  <strong>template for frontend application</strong>
</div>

## Tasks
### Development
```
$ npm start
$ open http://localhost:8080 # or http://localhost:8080/webpack-dev-server/
```

### Test
```
$ npm test # or npm test:watch
```

### Build
```
$ npm run build
```

## Directory Structure of the Generated Project
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

## npm run flow
Check a type in your code.

## Tools
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
