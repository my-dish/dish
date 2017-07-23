#!/usr/bin/env node

'use strict';

const inquirer = require('inquirer');
const tasks    = require('./tasks');
const router   = require('./router');

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
    type   : 'list',
    name   : 'type',
    message: 'Which do you want to use?',
    choices: router
  }
]).then((ans) => {
  const template = router.find((e) => e.name === ans.type);

  tasks(commands[0], template);
});
