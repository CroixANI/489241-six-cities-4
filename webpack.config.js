const path = require(`path`);
// eslint-disable-next-line no-undef
const dirPath = path.join(__dirname, `public`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: dirPath
  },
  devServer: {
    contentBase: dirPath,
    open: true,
    inline: false,
    port: 1337
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`
        }
      }
    ]
  },
  devtool: `source-map`
}
