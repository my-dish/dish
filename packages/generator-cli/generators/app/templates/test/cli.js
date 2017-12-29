'use strict';

const path     = require('path');
const test     = require('ava');
const packages = require('../package.json');

test('should return version number', async (t) => {
  const versionLabel = `${packages.version}`;
  const version = require('../bin/cli');

  t.is(version, versionLabel);
});
