import path from 'path';
import test from 'ava';
import checkFiles from '../../../../test/check-files';

let tmpPath;

test.afterEach(async () => {
  await checkFiles.after(tmpPath);
});

test.serial('should return template files', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/app'),
    files: ['LICENSE', 'README.md', 'package.json'],
    options: {
      dish: {tester: 'ava'}
    }
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['LICENSE']);
  t.snapshot(res.files['README.md']);
  t.snapshot(res.files['package.json']);
});

test.serial('should rename the file name', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/app'),
    files: ['LICENSE', 'README.md', 'package.json'],
    options: {
      dish: {tester: 'ava'}
    },
    prompts: { projectname: 'test'}
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['LICENSE']);
  t.snapshot(res.files['README.md']);
  t.snapshot(res.files['package.json']);
});

test.serial('should use jest', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/app'),
    files: ['LICENSE', 'README.md', 'package.json'],
    options: {
      dish: {tester: 'jest'}
    }
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['package.json']);
});

test.serial('should expand package.json', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/app'),
    files: ['LICENSE', 'README.md', 'package.json'],
    options: {
      dish: {
        extension: {
          foo: [1, 2],
          bar: {
            1: 2
          }
        }
      }
    }
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['package.json']);
});
