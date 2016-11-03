'use strict';

const fs         = require('fs-extra');
const path       = require('path');
const chalk      = require('chalk');
const pathExists = require('path-exists');
const npm        = require('./npm');
const router     = require('./router');

module.exports = (projectName, templateType, testDirPath) => {
  const project = path.resolve(projectName);

  if (!pathExists.sync(project)) {
    const setting     = router(templateType);
    const currentPath = process.cwd();
    const projectPath = testDirPath ? testDirPath : path.resolve(currentPath, project);

    fs.mkdirsSync(projectPath);
    process.chdir(projectPath);

    console.log(chalk.cyan('Installing packages.'));

    if (process.env.NODE_ENV !== 'test') npm(projectName, project, setting.id);

    console.log(chalk.cyan('Installed from npmjs.'));
    console.log(chalk.cyan('Making the stage.'));

    if (process.env.NODE_ENV === 'test') debugMode(setting.templatePath, testDirPath);
    else if (process.env.NODE_ENV === 'development') debugMode(setting.templatePath);
    else productionMode(setting.templatePath);

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

function debugMode(templatePath, testDirPath) {
  const base = testDirPath ? testDirPath : '.';
  fs.copySync(path.join(__dirname, '..', 'template', 'common'), base);
  fs.copySync(path.join(__dirname, '..', 'template', templatePath), base);
}

function productionMode(templatePath) {
  fs.copySync(path.resolve('node_modules', 'my-dish', 'template', 'common'), '.');
  fs.copySync(path.resolve('node_modules', 'my-dish', 'template', templatePath), '.');
}
