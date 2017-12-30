'use strict';

const Generator = require('yeoman-generator');

class Yo extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'middlewarename',
        message: 'What is the name of the middleware?',
        default: 'middleware'
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('middleware.js'),
      this.destinationPath(`./${this.props.middlewarename}.js`)
    );
  }
};

module.exports = Yo;
