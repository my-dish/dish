'use strict';

const Generator = require('yeoman-generator');

class Yo extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'containername',
        message: 'What is the name of the container?',
        default: 'Container'
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('Container.js'),
      this.destinationPath(`./${this.props.containername}.js`)
    );
  }
};

module.exports = Yo;
