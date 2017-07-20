'use strict';

const path  = require('path');
const rc    = require('rc');
const spawn = require('cross-spawn');

/**
 * execute install
 *
 * @private
 * @param {string} command - npm or yarn
 * @param {Array<string>} args
 */
function install(command, args) {
  if (command === 'yarn') {
    if (args[0] === '-S') {
      args.shift();

      spawn.sync('yarn', [
        'add',
        ...args
      ], { stdio: 'inherit' });
    }
    if (args[0] === '-D') {
      args[0] = '--dev';

      spawn.sync('yarn', [
        'add',
        ...args
      ], { stdio: 'inherit' });
    }
  }
  else {
    spawn.sync('npm', [
      'install',
      ...args
    ], { stdio: 'inherit' });
  }
}

/**
 * @param {string} command - npm or yarn
 * @param {Array<string>} dependencies
 * @param {Array<string>} devDependencies
 */
function installPackages(command, dependencies, devDependencies) {

  // install dependencies
  if (Array.isArray(dependencies)) {
    install(command, [
      '-S',
      ...dependencies
    ]);
  }

  // install devDependencies
  if (Array.isArray(devDependencies)) {
    install(command, [
      '-D',
      ...devDependencies
    ]);
  }
}

/**
 * @param {string} templateURL
 */
function installTemplates(templateURL) {
  const commonURL = '@my-dish/template-common';

  install('npm', [
    commonURL,
    templateURL
  ]);
}

/**
 * @param {string} templateURL
 */
function uninstallTemplates(templateURL) {
  const commonURL = '@my-dish/template-common';

  spawn.sync('npm', [
    'uninstall',
    commonURL,
    templateURL
  ], { stdio: 'inherit' });
}

/**
 * @param {Object} npm - created by dish
 * @param {string} projectName
 */
function createPackageJSON(npm, projectName) {
  const npmrc = rc('npm');

  const author =
    (
      `${npmrc['init.author.name'] ? npmrc['init.author.name'] : '' } ${
        npmrc['init.author.email'] ? `<${npmrc['init.author.email']}` : '' } ${
        npmrc['init.author.url'] ? npmrc['init.author.url'] : ''}`
    ).trim();

  const packageInfo = {
    name       : projectName,
    main       : npm.settings.main,
    author     : author,
    version    : '0.0.1',
    license    : npmrc['init.license'] || 'ISC',
    description: ''
  };

  if (Array.isArray(npm.settings.key)) {
    npm.settings.key.forEach((e) => {
      packageInfo[Object.keys(e)[0]] = e[Object.keys(e)[0]];
    });
  }

  return JSON.stringify(
    Object.assign(packageInfo, npm.tasks, npm.env),
    null, 2
  );
}

module.exports = {
  installPackages,
  installTemplates,
  createPackageJSON,
  uninstallTemplates
};
