'use strict';

module.exports = {
  scripts: {
    changelog: 'conventional-changelog -p angular -i CHANGELOG.md -s -r 0',
    lint     : 'eslint .',
    test     : 'nyc ava',
    flow: 'flow',
    start: 'npm run build -- -w',
    build: 'babel src -d lib',
    postcover: 'nyc npm test && nyc report --reporter=text-lcov > coverage.lcov && codecov',
    prepublish: 'NODE_ENV=production npm run build',
    'flow-typed': 'flow-typed install'
  }
};
