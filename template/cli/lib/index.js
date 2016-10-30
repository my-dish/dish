#!/usr/bin/env node

'use strict';

var commands = process.argv.slice(2);

if (commands[0] === '-v' || commands[0] === '--version') {
  console.log('Version: ' + require('../package.json').version);
  process.exit(0);
}
