'use strict';

module.exports = {
  scripts: {
    test        : 'jest --coverage',
    flow        : 'flow',
    lint        : 'npm run lint:js && npm run lint:css',
    start       : 'webpack-dev-server',
    build       : 'NODE_ENV=production webpack',
    'lint:js'   : 'eslint src',
    changelog   : 'conventional-changelog -p angular -i CHANGELOG.md -s -r 0',
    'lint:css'  : 'stylelint src/**/*.css',
    postinstall : 'npm run flow-typed',
    'flow-typed': 'flow-typed install',
    'test:watch': 'jest --watch --coverage'
  }
};
