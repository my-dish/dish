'use strict';

module.exports = {
  scripts: {
    build: 'webpack --config ./webpack.production.config.js',
    changelog: 'conventional-changelog -p angular -i CHANGELOG.md -s -r 0',
    flow: 'flow',
    lint: 'eslint src',
    start: 'webpack-dev-server',
    test: 'jest',
    'test:watch': 'jest --watch',
    postinstall: 'flow-typed install'
  }
};
