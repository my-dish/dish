'use strict';

const Generator = require('yeoman-generator');

class Yo extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'actionname',
        message: 'What is the name of the action?',
        default: 'action'
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('action.js'),
      this.destinationPath(`./${this.props.actionname}.js`)
    );
  }
};

module.exports = Yo;
