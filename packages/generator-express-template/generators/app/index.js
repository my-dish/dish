'use strict';

const Generator = require('yeoman-generator');

class Yo extends Generator {
  prompting() {

    const prompts = [
      {
        type: 'list',
        name: 'template',
        message: 'Which tempalte do you create?',
        choices: [
          'entrypoint',
          'router',
          'installer'
        ]
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    switch (this.props.template) {
      case 'entrypoint':
        this.composeWith(
          '@my-dish/express-template:entrypoint',
          { local: require.resolve('../entrypoint') }
        );
        break;
      case 'router':
        this.composeWith(
          '@my-dish/express-template:router',
          {},
          { local: require.resolve('../router') }
        );
        break;
      case 'installer':
        this.composeWith(
          '@my-dish/express-template:installer',
          {},
          { local: require.resolve('../installer') }
        );
        break;
    }
  }
};

module.exports = Yo;
