'use strict';

const Generator = require('yeoman-generator');

const dependencies = [
  'yeoman-generator'
];

const devDependencies = [
  'yeoman-test',
  'yeoman-assert'
];

class Yo extends Generator {
  prompting() {
    const prompts = [{
      type: 'input',
      name: 'generatorName',
      message: 'What is the name of the generator?'
    }];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath('.'),
      { generatorName: this.props.generatorName }
    );
  }

  install() {
    this.runInstall('npm', dependencies);
    this.runInstall('npm', devDependencies, { 'save-dev': true });
  }
};

module.exports = Yo;
