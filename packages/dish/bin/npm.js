'use strict';

const fs                = require('fs');
const path              = require('path');
const packer            = require('@my-dish/packer');
const commandExistsSync = require('command-exists').sync;

function installPackages(templateURL) {
  const command = commandExistsSync('yarn') ? 'yarn' : 'npm';

  const npm = require(
    path.join(process.cwd(), 'node_modules', templateURL, 'npm')
  );

  return packer.installPackages(
    command,
    npm.packages.dependencies,
    npm.packages.devDependencies
  );
}

function installTemplates(templateURL) {
  return packer.installTemplates(templateURL);
}

// yarn and npm(over 5) overwrite node_modules so dish reinstalls templates
function uninstallTemplates(templateURL) {

  // if (command === 'yarn') {
  //
  //   // delete package-lock.json if npm version is over 5
  //   fs.unlinkSync(path.join(process.cwd(), 'package-lock.json'));
  // }

  return packer.uninstallTemplates(templateURL);
}

function createPackageJSON(projectName, projectPath, templateURL) {
  const npm = require(
    path.join(process.cwd(), 'node_modules', templateURL, 'npm')
  );

  const packageJSON = packer.createPackageJSON(npm, projectName);

  fs.writeFileSync(path.join(projectPath, 'package.json'), packageJSON);
}

module.exports = {
  installPackages,
  installTemplates,
  createPackageJSON,
  uninstallTemplates
};
