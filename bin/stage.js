'use strict';

const fs         = require('fs-extra');
const path       = require('path');
const chalk      = require('chalk');
const pathExists = require('path-exists');
const npm        = require('./npm');
const router     = require('./router');

module.exports = (projectName, templateType) => {
  const project = path.resolve(projectName);

  if (!pathExists.sync(project)) {
    const setting     = router(templateType);
    const currentPath = process.cwd();
    const projectPath = path.resolve(currentPath, project);

    fs.mkdirsSync(projectPath);
    process.chdir(projectPath);

    console.log(chalk.cyan('Installing packages.'));

    npm(projectName, project, setting.id);

    console.log(chalk.cyan('Installed from npmjs.'));
    console.log(chalk.cyan('Making the stage.'));

    fs.copySync(path.resolve('node_modules', 'my-dish', 'template', 'common'), '.');
    fs.copySync(path.resolve('node_modules', 'my-dish', 'template', setting.templatePath), '.');

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
