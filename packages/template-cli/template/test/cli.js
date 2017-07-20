'use strict';

const path     = require('path');
const execFile = require('child_process').execFile;
const test     = require('ava');
const pify     = require('pify');
const packages = require('../package.json');

const executionPath = path.join(__dirname, '..', 'bin', 'index.js');

test('should return version number', async(t) => {
  const versionLabel = `${packages.version}`;
  const stdout       = await pify(execFile)(executionPath, ['-v']);

  t.is(stdout.trim(), versionLabel);
});
