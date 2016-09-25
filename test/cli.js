import test from 'ava';
import pify from 'pify';
import {execFile} from 'child_process';
import packages from '../package.json';

test('should return help', async (t) => {
  const versionLabel = `Version: ${packages.version}`;
  const stdout       = await pify(execFile)('../bin/dish.js', ['-v']);

  t.is(stdout.trim(), versionLabel);
});
