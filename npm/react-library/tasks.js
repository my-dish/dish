'use strict';

module.exports = {
  scripts: {
    build       : 'babel src -d lib',
    flow        : 'flow',
    'flow-typed': 'flow-typed install',
    start       : 'start-storybook -p 8080',
    changelog   : 'conventional-changelog -p angular -i CHANGELOG.md -s -r 0',
    lint        : 'eslint .',
    test        : 'jest --coverage',
    'test:watch': 'jest --watch --coverage',
    prepublish  : 'npm run build',
    postcover   : 'nyc npm test && nyc report --reporter=text-lcov > coverage.lcov && codecov'
  }
};
