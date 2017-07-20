import { exec } from 'child_process';
import test from 'ava';
import npm from '../npm';

const lsNPM = () => {
  return new Promise((resolve, reject) => {
    exec('ls npm', (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

test('should have files in /npm', async(t) => {
  const res = await lsNPM();
  const list = [
    'env.js',
    'index.js',
    'packages.js',
    'setting.js',
    'tasks.js'
  ].join('\n');

  t.is(res.trim(), list);
});

test('should have properties', (t) => {
  t.truthy(Reflect.has(npm, 'env'));
  t.truthy(Reflect.has(npm, 'tasks'));
  t.truthy(Reflect.has(npm, 'settings'));
  t.truthy(Reflect.has(npm, 'packages'));
});
