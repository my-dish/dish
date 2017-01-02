<div align="center">
  <h1>Dish</h1>
</div>

<div align="center">
  <strong>template for frontend application</strong>
</div>

## Tasks

### npm start
Start as development.  
Default port is 8080.  
Dish uses [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard) and [webpack-dev-server](https://github.com/webpack/webpack-dev-server).
```
$ npm start
$ open http://localhost:8080 # or http://localhost:8080/webpack-dev-server/
```

### npm test
Test runner is [ava](https://github.com/avajs/ava).
```
$ npm run test or npm run test:watch
```

### npm run build
Build as production.  
Source codes is compressed by webpack.  
If you don't want to include the css in js, you can uncomment `extract-text-webpack-plugin` in `webpack.production.config.js`.

### npm run flow
Use flow-bin.
Check a type in your code.

### npm run lint
Use eslint.

### npm run changelog
Generate CHANGELOG.md from your commit.

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
│   │   └── configureStore.prod.js
│   ├── styles
│   │   ├── _mixins.css
│   │   ├── _variables.css
│   │   ├── app.css
│   │   └── mixins
│   │       └── _hero-background.css
│   └── types
│       └── index.js
├── webpack.config.js
└── webpack.production.config.js
```
