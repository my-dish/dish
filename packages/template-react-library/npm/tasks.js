'use strict';

module.exports = {
  scripts: {
    flow        : 'flow',
    lint        : 'eslint .',
    test        : 'jest --coverage',
    build       : 'babel src -d lib',
    start       : 'start-storybook -p 8080',
    changelog   : 'conventional-changelog -p angular -i CHANGELOG.md -s -r 0',
    postcover   : 'nyc npm test && nyc report --reporter=text-lcov > coverage.lcov && codecov',
    prepublish  : 'npm run build',
    'test:watch': 'jest --watch --coverage',
    'flow-typed': 'flow-typed install'
  }
};
