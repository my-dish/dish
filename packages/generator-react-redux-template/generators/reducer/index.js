'use strict';

const Generator = require('yeoman-generator');

class Yo extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'reducername',
        message: 'What is the name of the reducer?',
        default: 'reducer'
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
      entrypoint,
      reducername
    } = this.props;

    this.fs.copyTpl(
      this.templatePath('reducer.js'),
      this.destinationPath(`./${reducername}.js`),
      {}
    );

    if (entrypoint) {
      this.fs.copyTpl(
        this.templatePath('index.js'),
        this.destinationPath('./index.js'),
        { reducername }
      );
    }
  }
};

module.exports = Yo;
