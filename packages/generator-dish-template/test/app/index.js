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
    files: ['README.md', 'package.json']
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['README.md']);
  t.snapshot(res.files['package.json']);
});

test.serial('should rename the file name', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/app'),
    files: ['README.md', 'package.json'],
    prompts: { generatorname: 'test' }
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['README.md']);
  t.snapshot(res.files['package.json']);
});
