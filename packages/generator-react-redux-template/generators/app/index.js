'use strict';

const Generator = require('yeoman-generator');

// TODO: add an installer

/**
 * options
 * @param {string} template
 * @param {string} path
 */
class Yo extends Generator {
  prompting() {
    if (this.options.template) {
      this.props = { template: this.options.template };
      return;
    }

    const prompts = [
      {
        type: 'list',
        name: 'template',
        message: 'Which template do you create?',
        choices: [
          'component',
          'container',
          'reducer',
          'action',
          'middleware',
          'installer'
        ]
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this.options.path = this.options.path || '.';

    switch (this.props.template) {
      case 'component':
        this.composeWith(
          '@my-dish/react-redux-template:component',
          { path: this.options.path },
          { local: require.resolve('../component') }
        );
        break;
      case 'container':
        this.composeWith(
          '@my-dish/react-redux-template:container',
          {},
          { local: require.resolve('../container') }
        );
        break;
      case 'reducer':
        this.composeWith(
          '@my-dish/react-redux-template:reducer',
          {},
          { local: require.resolve('../reducer') }
        );
        break;
      case 'action':
        this.composeWith(
          '@my-dish/react-redux-template:action',
          {},
          { local: require.resolve('../action') }
        );
        break;
      case 'middleware':
        this.composeWith(
          '@my-dish/react-redux-template:middleware',
          {},
          { local: require.resolve('../middleware') }
        );
        break;
      case 'installer':
        this.composeWith(
          '@my-dish/react-redux-template:installer',
          { packages: this.options.packages },
          { local: require.resolve('../installer') }
        );
        break;
    }
  }
};

module.exports = Yo;
