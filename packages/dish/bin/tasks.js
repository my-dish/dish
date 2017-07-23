'use strict';

const path       = require('path');
const Listr      = require('listr');
const chalk      = require('chalk');
const pathExists = require('path-exists');
const stage      = require('./stage');
const npm        = require('./npm');

function rootTasks(projectName, template) {
  let projectPath;

  const tasks = new Listr([
    {
      title: 'Create your Project',
      task : () => {
        const project = path.resolve(projectName);

        if (!pathExists.sync(project)) {
          projectPath = stage.createProject(project);
          process.chdir(projectPath);
        }
        else {
          throw new Error(`${projectName} already exists ;(`);
        }
      }
    },
    {
      title: 'Install packages of the template',
      task : () => npm.installTemplates(template.url)
    },
    {
      title: 'Make the template',
      task : () => stage.copyTemplate(template.url)
    },
    {
      title: 'Rename ignorefile',
      task : () => stage.renameIgnoreFile()
    },
    {
      title: 'Create package.json',
      task : () => npm.createPackageJSON(projectName, projectPath, template.url)
    },
    {
      title: 'Install packages',
      task : () => npm.installPackages(template.url)
    },
    {
      title: 'Delete templates from node_modules',
      task : () => npm.uninstallTemplates(template.url)
    }
  ]);

  tasks
    .run()
    .then(() => {
      console.log();
      console.log(`$ cd ${projectName}`);
      console.log('$ npm start');
      console.log();
      console.log(chalk.green('Have a nice time :)'));
    })
    .catch((err) => {
      console.error(chalk.red(err));
    });
}

module.exports = rootTasks;
