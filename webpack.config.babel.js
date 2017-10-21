//webpack config file being transpiled by babel
import webpack from 'webpack';
import path from 'path';

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
  }
};
