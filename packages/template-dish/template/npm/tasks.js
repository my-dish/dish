'use strict';

module.exports = {
  scripts: {
    changelog: 'conventional-changelog -p angular -i CHANGELOG.md -s -r 0',
    lint     : 'eslint .',
    test     : 'nyc ava',
    postcover: 'nyc npm test && nyc report --reporter=text-lcov > coverage.lcov && codecov'
  }
};
