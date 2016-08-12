'use strict';

const _        = require('lodash');
const fs       = require('fs');
const path     = require('path');
const spawn    = require('cross-spawn');
const env      = require('../data/env');
const tasks    = require('../data/tasks');
const packages = require('../data/packages');

module.exports = (projectName, projectPath) => {
  const packageInfo = {
    name: projectName,
    main: 'src/index.js',
    version: '0.0.1',
    description: '',
  };

  fs.writeFileSync(path.join(projectPath, 'package.json'),
    JSON.stringify(_.merge(packageInfo, tasks, env), null, 2));

  // install template
  install([
    'install',
    'my-dish'
  ]);

  // install dependencies
  install([
    'install',
    '-S',
    ...packages.dependencies
  ]);

  // install devDependencies
  install([
    'install',
    '-D',
    ...packages.devDependencies
  ]);
};

function install(args) {
  spawn.sync('npm', args, {stdio: 'inherit'});
}
