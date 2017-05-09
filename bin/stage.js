'use strict';

const path       = require('path');
const fs         = require('fs-extra');
const chalk      = require('chalk');
const pathExists = require('path-exists');
const npm        = require('./npm');
const router     = require('./router');

module.exports = (projectName, template, testDirPath) => {
  const project = path.resolve(projectName);

  if (!pathExists.sync(project)) {
    const url = template.url;

    const currentPath = process.cwd();
    const projectPath = testDirPath ? testDirPath : path.resolve(currentPath, project);

    fs.mkdirsSync(projectPath);
    process.chdir(projectPath);

    console.log(chalk.cyan('Installing packages.'));

    if (process.env.NODE_ENV !== 'test') npm(projectName, project, url);

    console.log(chalk.cyan('Installed from npmjs.'));
    console.log(chalk.cyan('Making the stage.'));

    copyTemplate(url);

    // rename .npmignore to .gitignore
    fs.renameSync(`${process.cwd()}/.npmignore`, `${process.cwd()}/.gitignore`);

    console.log();
    console.log(`$ cd ${projectName}`);
    console.log('$ npm start');
    console.log();
    console.log(chalk.green('Have a nice time :)'));
  }
  else {
    console.error(chalk.red(`Error: ${projectName} already exists ;(`));
  }
};

/**
 * @description copy the template
 */
function copyTemplate(templatePath) {
  fs.copySync(path.resolve('node_modules', '@my-dish/template-common', 'template'), '.');
  fs.copySync(path.resolve('node_modules', templatePath, 'template'), '.');
}
