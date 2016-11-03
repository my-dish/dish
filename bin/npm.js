'use strict';

const fs       = require('fs');
const path     = require('path');
const rc       = require('rc');
const spawn    = require('cross-spawn');
const router   = require('./router');

module.exports = (projectName, projectPath, templateType) => {
  const npm    = router(templateType).npm;
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
    main: path.join(npm.setting.main, 'index.js'),
    author: author === '' ? undefined : author,
    version: '0.0.1',
    license: npmrc['init.license'] === undefined ? 'ISC' : npmrc['init.license'],
    description: ''
  };

  npm.setting.key.forEach((e) => packageInfo[Object.keys(e)[0]] = e[Object.keys(e)[0]]);

  fs.writeFileSync(path.join(projectPath, 'package.json'),
    JSON.stringify(Object.assign(packageInfo, npm.tasks, npm.env), null, 2));

  if (process.env.NODE_ENV !== 'test') {

    // install template
    install([
      'install',
      'my-dish'
    ]);

    // install dependencies
    install([
      'install',
      '-S',
      ...npm.packages.dependencies
    ]);

    // install devDependencies
    install([
      'install',
      '-D',
      ...npm.packages.devDependencies
    ]);
  }
};

function install(args) {
  spawn.sync('npm', args, {stdio: 'inherit'});
}
