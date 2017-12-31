import path from 'path';
import test from 'ava';
import checkFiles from '../../../../test/check-files';

let tmpPath;

test.afterEach(async () => {
  await checkFiles.after(tmpPath);
});

test.serial('should return template files', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/component'),
    files: ['Component.js', 'style.css', 'index.js']
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['Component.js']);
  t.snapshot(res.files['index.js']);
  t.snapshot(res.files['style.css']);
});

test.serial('should rename the file name and the component is stateless', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/component'),
    files: ['test.js', 'index.js'],
    prompts: {
      componentname: 'test',
      style: false,
      entrypoint: true
    }
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['test.js']);
  t.snapshot(res.files['index.js']);
});

test.serial('should rename the file name and the component is not stateless', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/component'),
    files: ['test.js', 'index.js'],
    prompts: {
      componentname: 'test',
      isStateless: false,
      style: false,
      entrypoint: true
    }
  });

  tmpPath = res.tmpPath;

  t.snapshot(res.files['test.js']);
  t.snapshot(res.files['index.js']);
});

test.serial('don\'t create an entrypoint', async (t) => {
  const res = await checkFiles.run({
    path: path.join(__dirname, '../../generators/component'),
    files: ['Component.js'],
    prompts: {
      entrypoint: false
    }
  });

  tmpPath = res.tmpPath;

  t.pass();
})
