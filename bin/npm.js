'use strict';

const fs       = require('fs');
const path     = require('path');
const rc       = require('rc');
const spawn    = require('cross-spawn');
const router   = require('./router');

module.exports = (projectName, projectPath, templateType) => {
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

  const setting = router(templateType).npm;

  fs.writeFileSync(path.join(projectPath, 'package.json'),
    JSON.stringify(Object.assign(packageInfo, setting.tasks, setting.env), null, 2));

  // install template
  install([
    'install',
    'my-dish'
  ]);

  // install dependencies
  install([
    'install',
    '-S',
    ...setting.packages.dependencies
  ]);

  // install devDependencies
  install([
    'install',
    '-D',
    ...setting.packages.devDependencies
  ]);
};

function install(args) {
  spawn.sync('npm', args, {stdio: 'inherit'});
}
