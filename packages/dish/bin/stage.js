'use strict';

const path = require('path');
const fs   = require('fs-extra');

/**
 * @description copy the template
 */
function copyTemplate(templatePath) {
  fs.copySync(path.resolve('node_modules', '@my-dish/template-common', 'template'), '.');
  fs.copySync(path.resolve('node_modules', templatePath, 'template'), '.');
}

function createProject(project) {
  const currentPath = process.cwd();
  const projectPath = path.resolve(currentPath, project);

  fs.mkdirsSync(projectPath);

  return projectPath;
}

// rename .npmignore to .gitignore
function renameIgnoreFile() {
  fs.renameSync(`${process.cwd()}/.npmignore`, `${process.cwd()}/.gitignore`);
}

module.exports = {
  copyTemplate,
  createProject,
  renameIgnoreFile
};
