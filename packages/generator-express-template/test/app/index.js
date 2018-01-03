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
    files: ['app.js']
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['app.js']);
});

test.serial('should rename the file name', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/app'),
    files: ['test.js'],
    prompts: { appname: 'test' }
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['test.js']);
});
