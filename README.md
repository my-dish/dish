<div align="center">
  <h1>Dish</h1>
</div>

<div align="center">
  <strong>Templates for JavaScript application using Yo</strong>
</div>

[![NPM][npm-image]][npm-url]
[![Travis][travis-image]][travis-url]
[![Codecov][codecov-image]][codecov-url]
[![David][david-image]][david-url]
[![Dependencyci][dependencyci-image]][dependencyci-url]
![license][license-image]

[npm-image]: https://img.shields.io/npm/v/my-dish.svg?style=flat-square  
[npm-url]: https://www.npmjs.com/org/my-dish  
[travis-image]: https://img.shields.io/travis/my-dish/dish.svg?style=flat-square  
[travis-url]: https://travis-ci.org/my-dish/dish  
[codecov-image]: https://img.shields.io/codecov/c/github/my-dish/dish/master.svg?style=flat-square  
[codecov-url]: https://codecov.io/gh/my-dish/dish  
[david-image]: https://img.shields.io/david/my-dish/dish.svg?style=flat-square  
[david-url]: https://david-dm.org/my-dish/dish  
[dependencyci-image]: https://img.shields.io/badge/Dependency/CI-passing-brightgreen.svg?style=flat-square  
[dependencyci-url]: https://dependencyci.com/github/my-dish/dish  
[license-image]: https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square  

## What's Dish?
This is a mono repo using [lerna](https://github.com/lerna/lerna).  
The generators of [Yo](https://github.com/yeoman/yo) are summarized.  

## Usage
```sh
$ npm i -g yo
$ npm i -g @my-dish/base
```

## Generators
### Templates
Provide a template for parts(e.g. `component`, `action`, etc...).
- [@my-dish/generator-babel-template](./packages/generator-babel-template)
- [@my-dish/generator-react-redux-template](./packages/generator-react-redux-template)
- [@my-dish/generator-dish-template](./packages/generator-dish-template)

### Packages
Create a foundation for the project.

## CHANGELOG
See the [CHANGELOG.md](./CHANGELOG.md).
