# packer

<!-- travis https://travis-ci.org/ -->
<!-- appveyor https://ci.appveyor.com -->
<!-- codecov https://codecov.io/gh -->
<!-- npm version badge: https://badge.fury.io/ -->

## Install
```
$ npm install @my-dish/packer
```

## Usage
```js
const packer = require('@my-dish/packer');

packer.installTemplate();
packer.createPackageJSON();
packer.installPackages();
```

### CLI
```sh
$ packer --debug [--reload]
```
