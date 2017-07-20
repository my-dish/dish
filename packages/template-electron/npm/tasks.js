'use strict';

module.exports = {
  scripts: {
    test            : 'jest --coverage',
    flow            : 'flow',
    lint            : 'npm run lint:js && npm run lint:css',
    start           : 'npm run start:main & npm run start:renderer',
    build           : 'NODE_ENV=production npm run build:main && NODE_ENV=production npm run build:render',
    changelog       : 'conventional-changelog -p angular -i CHANGELOG.md -s -r 0',
    'lint:js'       : 'eslint .',
    'lint:css'      : 'stylelint src/**/*.css',
    postinstall     : 'npm run flow-typed',
    'start:main'    : 'webpack --config ./webpack.main.config.js && electron .',
    'build:main'    : 'webpack --config ./webpack.main.config.js',
    'build:render'  : 'webpack --config ./webpack.renderer.config.js',
    'flow-typed'    : 'flow-typed install',
    'test:watch'    : 'jest --watch --coverage',
    'package:osx'   : 'npm run build && build --mac --x64',
    'start:renderer': 'webpack-dev-server --config ./webpack.renderer.config.js'
  }
};
