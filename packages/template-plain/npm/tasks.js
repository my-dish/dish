'use strict';

module.exports = {
  scripts: {
    lint     : 'eslint .',
    test     : 'nyc ava',
    debug    : 'packer --debug',
    changelog: 'conventional-changelog -p angular -i CHANGELOG.md -s -r 0',
    postcover: 'nyc npm test && nyc report --reporter=text-lcov > coverage.lcov && codecov'
  }
};
