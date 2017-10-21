//webpack config file being transpiled by babel
import webpack from 'webpack';
import path from 'path';
//webpack plugin which injects bundled .js file to main index.html file
import htmlwebpackplugin from 'html-webpack-plugin';

//htmlwebpackplugin config
const hwpconfig = new htmlwebpackplugin({
  //define main .html file location
  template: './src/index.html',
  filename: 'index.html',
  //where to inject the script
  inject: 'body'
});

export default {
  //entry .js file which runs through babel-polyfill
  entry: ['babel-polyfill', './src/index.js'],
  //output parameters
  output: {
    //name of the bundled file
    filename: 'bundle.js',
    //resolve path of bundled file
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    //define loaders for module
    loaders: [
      //load every .js and .jsx file and run them through babel, not including node_modules
      { test: /\.jsx?$/, loader:'babel-loader', exclude: /node_modules/ },
    ]
  },
  //define plugins
  plugins: {
    //use hwpconfig
    [hwpconfig],
  }
};
