'use strict';

const fs       = require('fs');
const path     = require('path');
const rc       = require('rc');
const spawn    = require('cross-spawn');
const env      = require('../npm/env');
const tasks    = require('../npm/tasks');
const packages = require('../npm/packages');

module.exports = (projectName, projectPath) => {
  const npmrc  = rc('npm');
  const author = (() => {
    const str = [];

    if (npmrc['init.author.name'])  str.push(npmrc['init.author.name']);
    if (npmrc['init.author.email']) str.push(`<${npmrc['init.author.email']}>`);
    if (npmrc['init.author.url'])   str.push(`(${npmrc['init.author.url']})`);

    return str.join(' ');
  })();

  const packageInfo = {
    name: projectName,
    main: path.join('src', 'index.js'),
    author: author === '' ? undefined : author,
    version: '0.0.1',
    license: npmrc['init.license'] === undefined ? 'ISC' : npmrc['init.license'],
    description: '',
  };

  fs.writeFileSync(path.join(projectPath, 'package.json'),
    JSON.stringify(Object.assign(packageInfo, tasks, env), null, 2));

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
