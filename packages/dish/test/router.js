import test from 'ava';
import router from '../bin/router';

test('should return the number of router', (t) => {
  t.is(router.length, 7);
});

test('should return info of `Web Application with React`', (t) => {
  const item = router[0];

  t.is(item.name, 'Web Application with React and Redux');
  t.is(item.url, '@my-dish/template-react-redux-application');
});

test('should return info of `Web Application with React`', (t) => {
  const item = router[1];

  t.is(item.name, 'Web Application with React');
  t.is(item.url, '@my-dish/template-react-application');
});

test('should return info of `React Library`', (t) => {
  const item = router[2];

  t.is(item.name, 'React Library');
  t.is(item.url, '@my-dish/template-react-library');
});

test('should return info of `CLI`', (t) => {
  const item = router[3];

  t.is(item.name, 'CLI');
  t.is(item.url, '@my-dish/template-cli');
});

test('should return info of `Electron`', (t) => {
  const item = router[5];

  t.is(item.name, 'Electron');
  t.is(item.url, '@my-dish/template-electron');
});

test('should return info of `Plain`', (t) => {
  const item = router[5];

  t.is(item.name, 'Plain');
  t.is(item.url, '@my-dish/template-plain');
});

test('should return info of `Dish`', (t) => {
  const item = router[6];

  t.is(item.name, 'Dish');
  t.is(item.url, '@my-dish/template-dish');
});
