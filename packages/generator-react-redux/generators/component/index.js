'use strict';

const path = require('path');
const Generator = require('yeoman-generator');

class Yo extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'componentname',
        message: 'What is the name of the component?',
        default: 'Component'
      }, {
        type: 'confirm',
        name: 'isStateless',
        message: 'Do you want to use a stateless component?'
      }, {
        type: 'confirm',
        name: 'style',
        message: 'Do you want to use css-module?'
      }, {
        type: 'confirm',
        name: 'entrypoint',
        message: 'Do you want to create an entrypoint(index.js)?'
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    const {
      style,
      entrypoint,
      isStateless,
      componentname
    } = this.props;

    this.fs.copyTpl(
      this.templatePath('_Component.js'),
      this.destinationPath(path.join(this.options.path, `${componentname}.js`)),
      {
        style,
        isStateless,
        componentname
      }
    );

    if (style) {
      this.fs.copyTpl(
        this.templatePath('style.css'),
        this.destinationPath(path.join(this.options.path, 'style.css')),
      );
    }

    if (entrypoint) {
      this.fs.copyTpl(
        this.templatePath('index.js'),
        this.destinationPath(path.join(this.options.path, 'index.js')),
        { componentname }
      );
    }
  }
};

module.exports = Yo;
