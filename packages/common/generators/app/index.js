'use strict';

const Generator = require('yeoman-generator');

const devDependencies = [
  'eslint',
  'eslint-config-sky',
  'conventional-changelog-cli'
];

class Yo extends Generator {
  prompting() {
    const prompts = [{
      type: 'input',
      name: 'projectname',
      default: 'app',
      message: 'What is the name of the project?'
    }];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  async writing() {
    const username = await this.user.github.username();

    this.fs.copyTpl(
      this.templatePath('**/.*'),
      this.destinationPath('.')
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      {
        username,
        projectname: this.props.projectname
      }
    );

    this.fs.copyTpl(
      this.templatePath('LICENSE'),
      this.destinationPath('LICENSE')
    );

    const pkg = this.fs.readJSON(this.templatePath('package.json'), {});

    pkg.name = this.props.projectname;

    Object.assign(pkg, this.options.dish.extension || {});

    switch (this.options.dish.tester) {
      case 'ava':
        devDependencies.push('ava', 'nyc');
        pkg.scripts.test = 'nyc ava';
        pkg.ava = {
          files: [
            'test/**/*.js',
            '!test/helper/*.js'
          ],
          tap: true,
          failFast: true,
          concurrency: 5
        };
        break;
      case 'jest':
        devDependencies.push('jest');
        pkg.scripts.test = 'jest --coverage';
        pkg.jest = {
          moduleNameMapper: {
            '^.+\\.(css)$': 'identity-obj-proxy'
          },
          moduleFileExtensions: [
            'js'
          ]
        };
        break;
    }

    this.fs.writeJSON(this.destinationPath('package.json'), pkg);
  }

  install() {
    this.runInstall('npm', devDependencies, { 'save-dev': true });
  }
};

module.exports = Yo;
