'use strict';

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
          'react',
          'react-dom',
          'react-router',
          'react-router-redux@next',
          'react-router-dom',
          'react-loadable',
          'redux',
          'react-redux',
          'redux-saga',
          'classnames'
          // '@storybook/cli',
          // '@storybook/react'
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
