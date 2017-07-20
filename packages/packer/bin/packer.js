#!/usr/bin/env node

/* eslint-disable no-console */
'use strict';


const commands = process.argv.slice(2);

if (commands.length === 0) {
  console.log('Usage: packer');
  console.log('--debug');
  process.exit(0);
}

if (commands[0] === '-v' || commands[0] === '--version') {
  console.log(`Version: ${require('../package.json').version}`);
  process.exit(0);
}

if (commands[0] === '--debug') {
  const path = require('path');
  const fs = require('fs-extra');
  const packer = require('../');

  const rootPath = process.cwd();
  const npmPath = path.join(process.cwd(), 'npm');
  const outputPath = path.join(process.cwd(), 'build');

  if (fs.pathExistsSync(npmPath)) {
    if (!fs.pathExistsSync(outputPath)) {
      fs.ensureDirSync(outputPath);
    }

    process.chdir(outputPath);

    if (commands[1] === '--reload' ||
      !fs.pathExistsSync(path.join(outputPath, 'node_modules'))
    ) {
      const npm = require(npmPath);
      const packageJSON = packer.createPackageJSON(npm, 'debug');

      fs.writeJsonSync(path.join(outputPath, 'package.json'), JSON.parse(packageJSON));
      packer.installPackages('npm', npm.packages.dependencies, npm.packages.devDependencies);
    }

    fs.copySync(path.join(rootPath, 'template'), outputPath);
  }
}
