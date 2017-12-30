'use strict';

const Generator = require('yeoman-generator');

const dependencies = [];
const devDependencies = [];

class Yo extends Generator {
  prompting() {
    const prompts = [
      {
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
    this.composeWith(
      require.resolve('@my-dish/common'),
      {
        dish: {
          tester: 'ava',
          extension: {
            bin: './bin/index.js'
          }
        }
      }
    );

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
