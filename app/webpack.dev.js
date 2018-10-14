const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: "./src/index.tsx"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      dev: true,
      template: "./src/index.hbs",
      react: "development"
    }),
    new CopyWebpackPlugin([
      { from: "./src/vendors/", to: "vendors" },
      { from: "./node_modules/react/umd/react.development.js", to: "./" },
      {
        from: "./node_modules/react-dom/umd/react-dom.development.js",
        to: "./"
      }
    ])
  ]
});
