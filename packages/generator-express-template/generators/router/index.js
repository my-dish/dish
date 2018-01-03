'use strict';

const path = require('path');
const mkdirp = require('make-dir');
const Generator = require('yeoman-generator');

class Yo extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'confirm',
        name: 'entrypoint',
        message: 'Would you like to create an entrypoint?(routes/index.js)',
        default: false
      },
      {
        type: 'input',
        name: 'apiname',
        message: 'What is the name of the api?',
        default: 'api'
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    if (this.props.entrypoint) {
      mkdirp('apis');

      this.fs.copyTpl(
        this.templatePath('index.js'),
        this.destinationPath('index.js'),
        { apiname: this.props.apiname }
      );

      this.fs.copyTpl(
        this.templatePath(path.join('apis', '_api')),
        this.destinationPath(path.join('apis', this.props.apiname))
      );
    }
    else {
      this.fs.copyTpl(
        this.templatePath(path.join('apis', '_api')),
        this.destinationPath(this.props.apiname)
      );
    }
  }
};

module.exports = Yo;
