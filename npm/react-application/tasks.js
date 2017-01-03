'use strict';

module.exports = {
  scripts: {
    build       : 'NODE_ENV=production webpack',
    postinstall : 'npm run flow-typed',
    changelog   : 'conventional-changelog -p angular -i CHANGELOG.md -s -r 0',
    flow        : 'flow',
    'flow-typed': 'flow-typed install',
    lint        : 'npm run lint:js && npm run lint:css',
    'lint:js'   : 'eslint src',
    'lint:css'  : 'stylelint src/**/*.css',
    start       : 'webpack-dev-server',
    test        : 'jest --coverage',
    'test:watch': 'jest --watch --coverage'
  }
};
