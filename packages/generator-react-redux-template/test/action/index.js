import path from 'path';
import test from 'ava';
import checkFiles from '../../../../test/check-files';

let tmpPath;

test.afterEach(async () => {
  await checkFiles.after(tmpPath);
});

test.serial('should return template files', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/action'),
    files: ['action.js']
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['action.js']);
});

test.serial('should rename the file name', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/action'),
    files: ['test.js'],
    prompts: { actionname: 'test' }
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['test.js']);
});
