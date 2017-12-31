'use strict';

const Generator = require('yeoman-generator');

const devDependencies = [];

const presets = [
  {
    name: 'babel-preset-env',
    checked: true
  },
  {
    name: 'babel-preset-stage-1',
    checked: true
  },
  {
    name: 'babel-preset-stage-2',
  },
  {
    name: 'babel-preset-stage-3',
  },
  {
    name: 'babel-preset-flow'
  },
  {
    name: 'babel-preset-react'
  },
  // {
  //   name: 'react-hot-loader@next'
  // },
  // {
  //   name: 'babel-preset-react-optimize'
  // }
];

class Yo extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'checkbox',
        name: 'packages',
        message: 'Which package do you use?',
        choices: presets
      }
    ];

    return this.prompt(prompts).then((props) => {
      devDependencies.push(...props.packages);

      this.props = props;
    });
  }

  writing() {
    const babelrc = {};

    babelrc.presets = this.props.packages.map((p) => {
      if (p === 'babel-preset-env') {
        return ['env', { modules: false }];
      }

      if (p.includes('preset')) {
        return p.replace('babel-preset-', '');
      }
      return p;
    });

    this.fs.copyTpl(
      this.templatePath('babelrc'),
      this.destinationPath('.babelrc'),
      { babelrc: JSON.stringify(babelrc, null, 2) }
    );
  }

  install() {
    this.runInstall('npm', devDependencies, { 'save-dev': true });
  }
};

module.exports = Yo;
