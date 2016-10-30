#!/usr/bin/env node

'use strict';

const inquirer    = require('inquirer');
const router      = require('./router');
const createStage = require('./stage');

const commands = process.argv.slice(2);

if (commands.length === 0) {
  console.log('Usage: dish <project-directory>');
  process.exit(0);
}

if (commands[0] === '-v' || commands[0] === '--version') {
  console.log(`Version: ${require('../package.json').version}`);
  process.exit(0);
}

inquirer.prompt([
  {
    type: 'list',
    name: 'type',
    message: 'Which do you want to use?',
    choices: [
      'Web Application with React',
      'React Library',
      'Command Line Tool'
    ]
  }
]).then((ans) => {
  createStage(commands[0], router(ans.type).id);
});
