<div align="center">
  <h1>Dish</h1>
</div>

<div align="center">
  <strong>the template for React Library</strong>
</div>

<!-- travis https://travis-ci.org/ -->
<!-- appveyor https://ci.appveyor.com -->
<!-- codecov https://codecov.io/gh -->
<!-- npm version badge: https://badge.fury.io/ -->

## Tasks
### Development
Uses react-storybook.
```
$ npm start
$ open http://localhost:8080
```

### Build
Creates `lib` by babel.  
`lib` is entry point of this library.
```
$ npm run build
```

### Prepublish
Runs `npm run build` before submitting to npm.

### Flow
```
$ npm run flow
```

### Flow-Typed
```
$ npm run fow-typed
```

### Test
```
$ npm test # or npm test:watch
```

### Lint
```
$ npm run lint
```

### Changelog
```
$ npm run changelog
```

## Packages
### Dependencies
- react
- classnames

### DevDependencies
- @kadira/storybook
- babel-jest
- babel-cli
- babel-plugin-syntax-flow
- babel-plugin-transform-flow-strip-types
- babel-preset-latest
- babel-preset-stage-1
- conventional-changelog-cli
- enzyme
- eslint
- eslint-config-sky
- flow-bin
- flow-typed
- jest
- nyc
- react-dom // for storybook
- react-addons-test-utils

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
├── .storybook
│   └── config.js
├── .travis.yml
├── LICENSE
├── README.md
├── __tests__
│   └── hero.js
├── examples
│   ├── .babelrc
│   ├── .gitignore
│   ├── index.html
│   ├── main.js
│   ├── package.json
│   └── webpack.config.js
├── package.json
├── src
│   ├── components
│   │   └── Hero.js
│   └── index.js
└── stories
    └── hero.js
```
