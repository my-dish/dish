'use strict';

const path = require('path');
const mkdirp = require('make-dir');
const Generator = require('yeoman-generator');

class Yo extends Generator {
  writing() {
    this.fs.copyTpl(
      this.templatePath('app.js'),
      this.destinationPath('app.js')
    );
  }
};

module.exports = Yo;
