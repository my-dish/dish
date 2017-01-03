'use strict';

const test     = require('ava');
const path     = require('path');
const pify     = require('pify');
const execFile = require('child_process').execFile;
const packages = require('../package.json');

const executionPath = path.join(__dirname, '..', 'bin', 'index.js');

test('should return version number', async (t) => {
  const versionLabel = `Version: ${packages.version}`;
  const stdout       = await pify(execFile)(executionPath, ['-v']);

  t.is(stdout.trim(), versionLabel);
});
