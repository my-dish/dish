'use strict';

const Generator = require('yeoman-generator');

const dependencies = [];
const devDependencies = [];

class Yo extends Generator {
  writing() {
    this.composeWith(
      require.resolve('@my-dish/common'),
      {
        dish: {
          tester: 'ava'
        }
      }
    );

    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath('.')
    );
  }

  install() {
    this.runInstall('npm', dependencies);
    this.runInstall('npm', devDependencies, { 'save-dev': true });
  }
};

module.exports = Yo;
