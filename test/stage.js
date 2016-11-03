import path from 'path';
import test from 'ava';
import fs from 'fs-extra';
import stage from '../bin/stage';

const testDirPath = path.join('/', 'tmp', '__testStageDir');

test.afterEach(() => {
  fs.removeSync(testDirPath);
});

test('should make directory of `Web Application with React`', async (t) => {
  stage('__testStageDir', 0, testDirPath);

  const res = await walk();

  t.not(res, 0);
});

test('should make directory of `React Library`', async (t) => {
  stage('__testStageDir', 1, testDirPath);

  const res = await walk();

  t.not(res, 0);
});

test('should make directory of `Command Line Tool`', async (t) => {
  stage('__testStageDir', 2, testDirPath);

  const res = await walk();

  t.not(res, 0);
});

function walk() {
  return new Promise((resolve) => {
    const items = [];

    fs.walk(testDirPath)
      .on('data', (item) => items.push(item))
      .on('end', () => resolve(items.length));
  });
}
