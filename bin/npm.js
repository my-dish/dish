'use strict';

const _     = require('lodash');
const fs    = require('fs');
const path  = require('path');
const spawn = require('cross-spawn');

module.exports = (projectName, projectPath) => {
  const env         = JSON.parse(fs.readFileSync('../data/env.json', 'utf-8'));
  const tasks       = JSON.parse(fs.readFileSync('../data/tasks.json', 'utf-8'));
  const packages    = JSON.parse(fs.readFileSync('../data/packages.json', 'utf-8'));
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
    'abouthiroppy/dish'
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
