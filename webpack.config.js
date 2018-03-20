const path = require('path');
const nodeExternals = require('webpack-node-externals');
const isLocal = process.env.NODE_ENV === 'prod' ? false : true;

module.exports = {
  devtool: "inline-source-map",
  mode: isLocal ? 'development' : 'production',
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.ts',
      '.tsx'
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
      }
    ]
  }
};
