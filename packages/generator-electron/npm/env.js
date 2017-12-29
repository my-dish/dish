'use strict';

module.exports = {
  jest: {
    moduleNameMapper: {
      '^.+\\.(css)$': 'identity-obj-proxy'
    },
    moduleFileExtensions: ['js'],
    snapshotSerializers : ['./node_modules/jest-serializer-enzyme']
  },
  build: {
    appId: 'com.electron.foo',
    files: [
      'dist',
      'index.html',
      'package.json',
      'build'
    ],
    mac: {
      target: 'default'
    },
    directories: {
      output: 'docs'
    }
  }
};
