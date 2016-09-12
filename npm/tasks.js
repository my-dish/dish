module.exports = {
  scripts: {
    build: 'webpack --config ./webpack.production.config.js',
    flow: 'flow',
    lint: 'eslint src',
    start: 'webpack-dev-server',
    test: 'ava',
    'test:watch': 'ava -w'
  }
}
