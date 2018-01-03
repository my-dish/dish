'use strict';

const path = require('path');
const mkdirp = require('make-dir');
const Generator = require('yeoman-generator');

class Yo extends Generator {
  prompting() {
    if (typeof this.options.packages === 'object') { // TODO fix
      this.props = { packages: this.options.packages }
      return;
    }

    const prompts = [
      {
        type: 'checkbox',
        name: 'packages',
        message: 'Which package do you use?',
        choices: [
          'express',
          'morgan',
          'body-parser',
          'cookie-parser'
        ]
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = {
        packages: {
          dependencies: props.packages
        }
      }
    });
  }

  install() {
    if (this.props.packages.dependencies) {
      this.runInstall('npm', this.props.packages.dependencies);
    }

    if (this.props.packages.devDependencies) {
      this.runInstall('npm', this.props.packages.devDependencies, {'save-dev': true});
    }
  }
};

module.exports = Yo;
