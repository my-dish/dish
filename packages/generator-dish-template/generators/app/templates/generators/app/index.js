'use strict';

const Generator = require('yeoman-generator');

const dependencies = [];
const devDependencies = [];

class Yo extends Generator {
  prompting() {

    // const prompts = [
    //   {
    //     type: 'input',
    //     name: 'projectName',
    //     message: 'What is the name of the project?'
    //   }
    // ];
    //
    // return this.prompt(prompts).then((props) => {
    //   this.props = props;
    // });
  }

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
