#!/usr/bin/env node

'use strict';

const createStage = require('./stage');

const commands = process.argv.slice(2);

if (commands.length === 0) {
  console.error('Usage: dish <project-directory>');
  process.exit(1);
}

if (commands[0] === '-v' || commands[0] === '--version') {
  console.log(`Version: ${require('../package.json').version}`);
  process.exit();
}

createStage(commands[0]);
