const path = require("path"),
  webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['url-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3000,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
