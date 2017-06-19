'use strict';
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');

// const locals = require('../server/utils/cfg-factory').getConfig('locals');

module.exports = {
  entry: {
    client: './client/index.js'
  },
  output: {
    path: config.outputPath,
    filename: 'js/[name].js',
    publicPath: config.publicPath
  },
  performance: {
    hints: config.NODE_ENV === 'production' ? 'warning' : false
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {},
    modules: [
      path.resolve(config.projectDir, './node_modules')
    ]
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      // vue-loader options goes  here
      options: {
          // extractCSS: false,
          scss: 'vue-style-loader!postcss-loader!style-loader!css-loader!sass-loader', // <style lang="scss">
          sass: 'vue-style-loader!postcss-loader!style-loader!css-loader!sass-loader?indentedSyntax', // <style lang="sass">
          stylus: 'vue-style-loader!postcss-loader!style-loader!css-loader!stylus-loader', // <style lang="stylus">
      }
    }, {
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.es6$/,
      loaders: ['babel-loader']
    }, {
      test: /\.(ico|png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 30000,
        name: 'static/images/[name].[hash:8].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 30000,
        name: 'static/fonts/[name].[hash:8].[ext]'
      }
    }, {
      test: /\.pug$/,
      loaders: 'pug-loader'
    },/**
    {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(['css-loader','postcss-loader','sass-loader'])//['style-loader','css-loader?importLoaders: 1','postcss-loader','sass-loader']//
    },
    {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract(['css-loader','postcss-loader','sass-loader?indentedSyntax'])//['style-loader','css-loader?importLoaders: 1','postcss-loader','sass-loader?indentedSyntax']//
    },
    {
        test: /\.(stylus|styl)$/,
        use: ['style-loader','css-loader?importLoaders: 1','postcss-loader','stylus-loader']//ExtractTextPlugin.extract(['css-loader','postcss-loader','stylus-loader'])
    },
         {
             test: /\.css$/,
             use:  ['style-loader', 'css-loader?importLoaders: 1','postcss-loader']//ExtractTextPlugin.extract({use:[ 'css-loader','postcss-loader'],fallback: 'style-loader'})//
         }**/
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
    new HtmlWebpackPlugin({
      // title: config.title,
      // locals: locals,
      template: path.resolve(config.projectDir, './client/index.html'),
      filename: "index.html",
      chunks: ['manifest', 'vendor', 'client']
    }),
    // new webpack.LoaderOptionsPlugin(_.loadersOptions())
  ],
  target: config.target
};
/***
 *  /**[
 //'sass-loader',
 //'sass-loader?indentedSyntax',
 'style-loader',
 'css-loader',
 'postcss-loader',

 {
     loader: 'postcss-loader',
     options: {
         sourceMap: true,
         config: {
             // path:path.resolve(config.projectDir,'../config/postcss.config.js'),
         },//
         plugins: (loader) => [
             require('autoprefixer')(),
         ]
     }
 }
 ]**/