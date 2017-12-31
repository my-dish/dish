'use strict';

const fs = require('fs');
const rimraf = require('rimraf');
const helper = require('yeoman-test');
const assert = require('yeoman-assert');

async function run(obj) {
  let tmpPath;

  return await helper.run(obj.path)
    .withPrompts(obj.prompts)
    .inTmpDir((dir) => tmpPath = dir)
    .then(() => assert.file(obj.files))
    .then(() => {
      const files = {};

      obj.files.forEach((file) => {
        files[file] = fs.readFileSync(require('path').join(tmpPath, file), 'utf-8');
      });

      return {
        tmpPath,
        files
      };
    });
}

async function after(dir) {
  return rimraf.sync(dir);
}

module.exports = {
  run,
  after
};
