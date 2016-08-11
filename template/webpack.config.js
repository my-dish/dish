const path    = require('path');
const webpack = require('webpack');

const PORT = 8080;

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'index.js'),
    `webpack-dev-server/client?http://0.0.0.0:${PORT}`,
    'webpack/hot/only-dev-server',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  cache: true,
  target: 'web',
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['', '.js', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'react-hot!babel',
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[path]__[name]__[local]__[hash:base64:5]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // if you don't specify `--hot`
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    hot: true,
    port: PORT,
    cache: true,
    inline: true,
    colors: true,
    contentBase: '.'
  }
};
