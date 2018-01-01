'use strict';

const mkdirp = require('mkdirp');
const Generator = require('yeoman-generator');

const devDependencies = [
  'babel-cli',
];

class Yo extends Generator {
  writing() {
    this.composeWith(
      require.resolve('@my-dish/common'),
      {
        dish: {
          tester: 'jest',
          extension: {
            scripts: {
              start: 'start-storybook -p 8080',
              build: 'babel src -d lib',
              prepublish: 'npm run build'
            },
            files: [
              'lib'
            ],
            main: 'lib/index.js'
          }
        }
      }
    );

    this.composeWith(
      require.resolve('@my-dish/generator-babel-template'),
      {
        packages: ['babel-preset-env', 'babel-preset-stage-1', 'babel-preset-react']
      }
    );

    mkdirp('src');

    this.composeWith(
      require.resolve('@my-dish/generator-react-redux-template'),
      {
        path: './src',
        template: 'component'
      }
    );

    this.composeWith(
      require.resolve('@my-dish/generator-react-redux-template'),
      {
        template: 'installer',
        packages: {
          dependencies: [
            'react',
            'classnames'
          ],
          devDependencies: [
            'react-dom', // for storybook
            '@storybook/cli',
            '@storybook/react',
            'react-addons-test-utils'
          ]
        }
      }
    );

    // this.fs.copyTpl( // TODO
    //   this.templatePath('.storybook'),
    //   this.destinationPath('.'),
    //   {
    //     componentname: 'aa'
    //   }
    // );
  }

  install() {
    this.runInstall('npm', devDependencies, { 'save-dev': true });
  }
};

module.exports = Yo;
