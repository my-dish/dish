<div align="center">
  <h1>Dish</h1>
</div>

<div align="center">
  <strong>the template for Web Application with React</strong>
</div>

<!-- travis https://travis-ci.org/ -->
<!-- appveyor https://ci.appveyor.com -->
<!-- codecov https://codecov.io/gh -->

## Tasks
### Development
```
$ npm start
$ open http://localhost:8080 # or http://localhost:8080/webpack-dev-server/
```

### Build
Build as production.  
Source codes are compressed by webpack.  
If you don't want to include the css in js, you should uncomment `extract-text-webpack-plugin` in `webpack.production.config.js`.
```
$ npm run build
```

### Test
```
$ npm test # or npm test:watch
```

### Flow
```
$ npm run flow
```

### Flow-Typed
```
$ npm run fow-typed
```

### Lint
Runs css and js lints.
```
$ npm run lint
```

### Changelog
```
$ npm run changelog
```

## Packages
### Dependencies
- axios
- react
- react-dom

### DevDependencies
- babel-core
- babel-eslint
- babel-jest
- babel-loader
- babel-polyfill
- babel-preset-latest
- babel-preset-react
- babel-preset-stage-1
- babel-plugin-syntax-flow
- babel-plugin-transform-flow-strip-types
- case-sensitive-paths-webpack-plugin
- conventional-changelog-cli
- css-loader
- enzyme
- eslint
- eslint-plugin-react
- eslint-config-sky
- extract-text-webpack-plugin@beta
- flow-bin
- flow-typed
- flow-status-webpack-plugin
- identity-obj-proxy
- jest
- react-addons-test-utils
- react-hot-loader@next
- stylelint
- stylelint-config-sky
- style-loader
- postcss-loader
- postcss-cssnext
- postcss-mixins
- postcss-reporter
- postcss-smart-import
- postcss-browser-reporter
- webpack@beta
- webpack-dashboard
- webpack-dev-server@beta
- webpack-merge

## Directory Structure of the Generated Project
```
.
├── .appveyor.yml
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc
├── .flowconfig
├── .gitignore
├── .stylelintrc
├── .travis.yml
├── LICENSE
├── README.md
├── __tests__
│   └── hero.js
├── index.html
├── package.json
├── postcss.config.js
├── src
│   ├── components
│   │   ├── App.js
│   │   └── Hero
│   │       ├── Hero.js
│   │       ├── hero.style.css
│   │       └── index.js
│   ├── index.js
│   └── styles
│       ├── mixins
│       │   └── hero-background.css
│       ├── mixins.css
│       └── variables.css
├── webpack.config.js
├── webpack.dev.config.js
└── webpack.prod.config.js
```
