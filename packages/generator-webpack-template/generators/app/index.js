'use strict';

const merge = require('webpack-merge');
const Generator = require('yeoman-generator');

const devDependencies = [
  'webpack',
  'webpack-merge',
  'webpack-dev-server'
];

class Yo extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'output',
        message: 'What is the name of the project?'
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('*'),
      this.destinationPath('.')
    );
  }

  install() {
    // this.runInstall('npm', dependencies);
    // this.runInstall('npm', devDependencies, { 'save-dev': true });
  }
};

module.exports = Yo;
