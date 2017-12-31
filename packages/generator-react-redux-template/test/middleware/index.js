import path from 'path';
import test from 'ava';
import checkFiles from '../../../../test/check-files';

let tmpPath;

test.afterEach(async () => {
  await checkFiles.after(tmpPath);
});

test.serial('should return template files', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/middleware'),
    files: ['middleware.js']
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['middleware.js']);
});

test.serial('should rename the file name', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/middleware'),
    files: ['test.js'],
    prompts: { middlewarename: 'test' }
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['test.js']);
});
