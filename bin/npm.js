'use strict';

const fs                = require('fs');
const path              = require('path');
const packer            = require('@my-dish/packer');
const commandExistsSync = require('command-exists').sync;

module.exports = (projectName, projectPath, templateURL) => {

  // install template
  packer.installTemplates(templateURL);
  const npm =
    require(path.join(process.cwd(), 'node_modules', templateURL, 'npm'));

  const packageJSON = packer.createPackageJSON(npm, projectName);

  fs.writeFileSync(path.join(projectPath, 'package.json'), packageJSON);

  const command = commandExistsSync('yarn') ? 'yarn' : 'npm';

  packer.installPackages(
    command,
    npm.packages.dependencies,
    npm.packages.devDependencies
  );

  // yarn and npm(over 5) overwrite node_modules so dish reinstalls templates
  packer.installTemplates(templateURL);

  if (command === 'yarn') {

    // delete package-lock.json if npm version is over 5
    fs.unlinkSync(path.join(process.cwd(), 'package-lock.json'));
  }
};
