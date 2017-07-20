import test from 'ava';
import * as packer from '../';

test.skip('should install packages', () => {
});

test('should create package.json when no npm made with dish', (t) => {
  const npm = {
    settings: {}
  };

  const packageJSON = packer.createPackageJSON(npm, 'test');

  t.deepEqual(packageJSON, JSON.stringify({
    name       : 'test',
    author     : 'abouthiroppy <git@about-hiroppy.com http://about-hiroppy.com',
    version    : '0.0.1',
    license    : 'MIT',
    description: ''
  }, null, 2));
});

test('should create package.json', (t) => {
  const npm = {
    settings: {
      key: {
        keywords: ['test1', 'test2']
      },
      main: 'tmain'
    },
    tasks: {
      scripts: {
        taskTest: 'b'
      }
    },
    env: {
      envTest: 'b'
    }
  };

  const packageJSON = packer.createPackageJSON(npm, 'test');

  t.deepEqual(packageJSON, JSON.stringify({
    name       : 'test',
    main       : 'tmain/index.js',
    author     : 'abouthiroppy <git@about-hiroppy.com http://about-hiroppy.com',
    version    : '0.0.1',
    license    : 'MIT',
    description: '',
    scripts    : {
      taskTest: 'b'
    },
    envTest: 'b'
  }, null, 2));
});
