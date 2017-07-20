#!/usr/bin/env node

'use strict';

const Cav = require('cav');
const packageJson = require('../package.json');

const commands = {
  'deploy <to> <env>'  : 'Deploy to ec2.',
  '-c, --current-state': 'Show Current State.'
};

const cav = new Cav(commands, packageJson);

cav.start((args) => {
  console.log(args);
});
