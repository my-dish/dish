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
    files: ['.babelrc'],
    prompts: { packages: ['babel-preset-env', 'babel-preset-stage-1'] }
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['.babelrc']);
});

test.serial('should rename the file name', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/app'),
    files: ['.babelrc'],
    prompts: { packages: ['babel-preset-react', 'babel-preset-flow'] }
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['.babelrc']);
});
