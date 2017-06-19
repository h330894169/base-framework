'use strict';

const webpack = require('webpack');
const base = require('./webpack.base');
// const _ = require('./utils');
const FriendlyErrors = require('friendly-errors-webpack-plugin');

const config = require('./config');
const styleLoaders = require('./config/style-loader-util');

// base.devtool = '#eval-source-map';
// base.devtool = 'source-map';
base.devtool = 'eval';
base.output.publicPath = config.DYN_JS_PATH;

base.module.rules
base.module.rules = base.module.rules.concat(styleLoaders.styleLoaders({
    extract: false
}));
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new FriendlyErrors()
  // new ExtractTextPlugin("style.css")
);

// push loader for css files
/**
_.cssProcessors.forEach(processor => {
  let loaders;
  if (processor.loader === '') {
    loaders = ['postcss-loader'];
  } else {
    loaders = ['postcss-loader', processor.loader];
  }
  base.module.rules.push({
    test: processor.test,
    loaders: ['style-loader', _.cssLoader].concat(loaders)
  });
});
**/
module.exports = base;
