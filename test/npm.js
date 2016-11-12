import path from 'path';
import test from 'ava';
import fs from 'fs-extra';
import npm from '../bin/npm';

const testDirPath = path.join('/', 'tmp', '__testNpmDir');

test.beforeEach(() => {
  fs.mkdirSync(testDirPath);
});

test.afterEach(() => {
  fs.removeSync(testDirPath);
});

test('should make package.json of `Web Application with React`', async (t) => {
  npm('__testNpmDir', testDirPath, 0);

  const res = await isExistedPackageJSON();

  t.is(res, true);
});

/**
 * @module isexistedpackagejson
 */
function isExistedPackageJSON() {
  return new Promise((resolve) => {
    const items = [];

    fs.walk(testDirPath)
      .on('data', (item) => items.push(item))
      .on('end', () => {
        resolve(items.some((e) => e.path.includes('package.json')));
      });
  });
}
