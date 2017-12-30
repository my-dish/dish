'use strict';

const Generator = require('yeoman-generator');

// TODO: add an installer

class Yo extends Generator {
  prompting() {
    if (this.options.template) {
      this.props = { template: this.options.template };
      return;
    }

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
    this.options.path = this.options.path || '.';

    switch (this.props.template) {
      case 'component':
        this.composeWith(
          '@my-dish/react-redux:component',
          { path: this.options.path },
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
