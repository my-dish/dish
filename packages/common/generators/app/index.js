'use strict';

const Generator = require('yeoman-generator');

const devDependencies = [
  'eslint',
  'eslint-config-sky',
  'conventional-changelog-cli'
];

class Yo extends Generator {
  prompting() {
    const prompts = [{
      type: 'input',
      name: 'projectname',
      default: 'app',
      message: 'What is the name of the project?'
    }];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  async writing() {
    const username = await this.user.github.username();

    switch (this.options.dish.tester) {
      case 'ava':
        devDependencies.push('ava', 'nyc');
        break;
      case 'jest':
        devDependencies.push('jest');
        break;
    }

    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath('.'),
      {
        username,
        tester: this.options.dish.tester,
        extension: this.options.dish.extension || {},
        projectname: this.props.projectname
      }
    );
  }

  install() {
    this.runInstall('npm', devDependencies, { 'save-dev': true });
  }
};

module.exports = Yo;
