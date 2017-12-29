'use strict';

const Generator = require('yeoman-generator');

const dependencies = [];
const devDependencies = [
  'ava',
  'nyc',
  'eslint',
  'eslint-config-sky',
  'conventional-changelog-cli'
];

class Yo extends Generator {
  prompting() {
    const prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'What is the name of the project?'
    }];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  async writing() {
    const username = await this.user.github.username();

    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath('.'),
      {
        username,
        projectName: this.props.projectName,
      }
    );
  }

  install() {
    this.runInstall('npm', dependencies);
    this.runInstall('npm', devDependencies, { 'save-dev': true });
  }
};

module.exports = Yo;
