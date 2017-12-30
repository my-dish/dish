'use strict';

const Generator = require('yeoman-generator');

// TODO: add an installer

class Yo extends Generator {
  prompting() {
    const prompts = [{
      type: 'list',
      name: 'template',
      message: 'Which template do you create?',
      choices: [
        'component',
        'container',
        'reducer',
        'action',
        'store'
      ]
    }];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    switch (this.props.template) {
      case 'component':
        this.composeWith(
          '@my-dish/react-redux:component',
          {},
          { local: require.resolve('../component') }
        );
        break;
      case 'container':
        this.composeWith(
          '@my-dish/react-redux:container',
          {},
          { local: require.resolve('../container') }
        );
        break;
      // case 'reducer':
      //   this.composeWith(
      //     '@my-dish/react-redux:reducer',
      //     {},
      //     { local: require.resolve('../reducer') }
      //   );
      //   break;
    }
  }
};

module.exports = Yo;
