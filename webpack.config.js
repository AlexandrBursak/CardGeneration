/**
 * Created by bursak on 12/5/16.
 */
module.exports = {
  entry: './src/router.js',
  output: {
    filename: 'bundle.js',
    path: './public'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        }
      }
    ]
  },
  watch: true,
  devtool: 'source-map'
};