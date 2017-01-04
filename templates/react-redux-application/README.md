<div align="center">
  <h1>Dish</h1>
</div>

<div align="center">
  <strong>the template for Web Application with React-Redux</strong>
</div>

<!-- travis https://travis-ci.org/ -->
<!-- appveyor https://ci.appveyor.com -->
<!-- codecov https://codecov.io/gh -->

## Setup
```
$ cd <project-directory>
$ npm run flow-typed # dish required running this command before starting.
$ npm start
```

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
- immutable
- react
- react-dom
- react-redux
- redux
- redux-saga

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
- conventional-changelog-cli
- case-sensitive-paths-webpack-plugin
- css-loader
- enzyme
- eslint
- eslint-config-sky
- extract-text-webpack-plugin@beta
- flow-bin
- flow-typed
- flow-status-webpack-plugin
- identity-obj-proxy
- jest
- jsdom
- react-addons-test-utils
- redux-devtools
- redux-devtools-extension
- react-hot-loader@next
- redux-logger
- style-loader
- stylelint
- stylelint-config-sky
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
│   ├── actions
│   │   └── index.js
│   ├── components
│   │   ├── Input.js
│   │   └── Label.js
│   ├── containers
│   │   ├── DisplayName.js
│   │   ├── FilterName.js
│   │   └── index.js
│   ├── middlewares
│   │   └── checkName.js
│   ├── reducers
│   │   └── users.js
│   └── sagas
│       ├── index.js
│       └── user.js
├── index.html
├── package.json
├── postcss.config.js
├── src
│   ├── actions
│   │   └── index.js
│   ├── components
│   │   ├── App.js
│   │   ├── Input
│   │   │   ├── Input.js
│   │   │   ├── index.js
│   │   │   └── input.style.css
│   │   └── Label
│   │       ├── Label.js
│   │       ├── index.js
│   │       └── label.style.css
│   ├── containers
│   │   ├── DisplayName.js
│   │   ├── FilterName.js
│   │   └── index.js
│   ├── index.js
│   ├── middlewares
│   │   ├── checkName.js
│   │   └── index.js
│   ├── reducers
│   │   ├── index.js
│   │   └── users.js
│   ├── sagas
│   │   ├── index.js
│   │   └── user.js
│   ├── store
│   │   ├── configureStore.dev.js
│   │   ├── configureStore.js
│   │   ├── configureStore.prod.js
│   │   └── npm-debug.log
│   ├── styles
│   │   ├── app.css
│   │   ├── mixins
│   │   │   └── outer-border.css
│   │   ├── mixins.css
│   │   └── variables.css
│   └── types
│       └── index.js
├── webpack.config.js
├── webpack.dev.config.js
└── webpack.prod.config.js
```
