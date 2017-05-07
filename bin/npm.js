'use strict';

const fs    = require('fs');
const path  = require('path');
const rc    = require('rc');
const spawn = require('cross-spawn');

module.exports = (projectName, projectPath, templateURL) => {
  if (process.env.NODE_ENV !== 'test') {

    const commonURL = '@my-dish/template-common';

    // install template
    install([
      'install',
      commonURL,
      templateURL
    ]);

    const npm = require(`${process.cwd()}/node_modules/${templateURL}/npm`);

    createPackageJSON(npm, projectName, projectPath);

    // install dependencies
    if (npm.packages.dependencies) {
      install([
        'install',
        '-S',
        ...npm.packages.dependencies
      ]);
    }

    // install devDependencies
    if (npm.packages.devDependencies) {
      install([
        'install',
        '-D',
        ...npm.packages.devDependencies
      ]);
    }
  }
};

/**
 * will delete
 */
function createPackageJSON(npm, projectName, projectPath) {
  const npmrc  = rc('npm');

  const author = (() => {
    const str = [];

    if (npmrc['init.author.name']) str.push(npmrc['init.author.name']);
    if (npmrc['init.author.email']) str.push(`<${npmrc['init.author.email']}>`);
    if (npmrc['init.author.url']) str.push(`(${npmrc['init.author.url']})`);

    return str.join(' ');
  })();

  const packageInfo = {
    name       : projectName,
    main       : npm.settings.main ? path.join(npm.settings.main, 'index.js') : '',
    author     : author === '' ? undefined : author,
    version    : '0.0.1',
    license    : npmrc['init.license'] === undefined ? 'ISC' : npmrc['init.license'],
    description: ''
  };

  npm.settings.key.forEach((e) => {
    packageInfo[Object.keys(e)[0]] = e[Object.keys(e)[0]];
  });

  fs.writeFileSync(path.join(projectPath, 'package.json'),
    JSON.stringify(Object.assign(packageInfo, npm.tasks, npm.env), null, 2));
}

/**
 * @description execute install
 */
function install(args) {
  spawn.sync('npm', args, { stdio: 'inherit' });
}
