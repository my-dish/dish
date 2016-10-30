import test from 'ava';
import router from '../bin/router';

test('should return info of `Web Application with React`', (t) => {
  const info = router(0);

  t.is(info.id, 0);
  t.is(Object.keys(info.npm).length, 4);
  t.is(info.templatePath, 'react-application');
});

test('should return info of `React Library`', (t) => {
  const info = router(1);

  t.is(info.id, 1);
  t.is(Object.keys(info.npm).length, 4);
  t.is(info.templatePath, 'react-library');
});

test('should return info of `Command Line Tool`', (t) => {
  const info = router(2);

  t.is(info.id, 2);
  t.is(Object.keys(info.npm).length, 4);
  t.is(info.templatePath, 'cli');
});
