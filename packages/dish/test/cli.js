import { execFile } from 'child_process';
import test from 'ava';
import pify from 'pify';
import packages from '../package.json';

test('should return description', async(t) => {
  const description = 'Usage: dish <project-directory>';
  const stdout      = await pify(execFile)('../bin/dish.js');

  t.is(stdout.trim(), description);
});

test('should return version number', async(t) => {
  const versionLabel = `Version: ${packages.version}`;
  const stdout       = await pify(execFile)('../bin/dish.js', ['-v']);

  t.is(stdout.trim(), versionLabel);
});
