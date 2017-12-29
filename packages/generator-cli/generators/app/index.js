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
    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of the project?'
      }, {
        type: 'input',
        name: 'commandName',
        message: 'What is the name of the command?'
      }, {
        type: 'checkbox',
        name: 'packages',
        message: 'Which package do you use?',
        choices: [
          'ora',
          'chalk',
          'caporal',
          'inquirer',
          'progress',
          'cli-table2'
        ]
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath('.'),
      {
        packages: this.props.packages,
        projectName: this.props.projectName,
        commandName: this.props.commandName
      }
    );
  }

  install() {
    dependencies.push(...this.props.packages);

    this.runInstall('npm', dependencies);
    this.runInstall('npm', devDependencies, { 'save-dev': true });
  }
};

module.exports = Yo;
