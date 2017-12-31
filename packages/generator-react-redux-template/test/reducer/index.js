import path from 'path';
import test from 'ava';
import checkFiles from '../../../../test/check-files';

let tmpPath;

test.afterEach(async () => {
  await checkFiles.after(tmpPath);
});

test.serial('should return template files', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/reducer'),
    files: ['reducer.js', 'index.js']
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['index.js']);
  t.snapshot(res.files['reducer.js']);
});

test.serial('should return only reducer', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/reducer'),
    files: ['reducer.js'],
    prompts: { entrypoint: false }
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['index.js']);
  t.snapshot(res.files['reducer.js']);
});

test.serial('should rename the file name of reducer', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/reducer'),
    files: ['test.js', 'index.js'],
    prompts: { reducername: 'test' }
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['index.js']);
  t.snapshot(res.files['test.js']);
});
