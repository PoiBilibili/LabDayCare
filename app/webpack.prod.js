const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common.js");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const StyleExtHtmlWebpackPlugin = require("style-ext-html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const extractCSS = new ExtractTextPlugin("stylesheets/[name]-one.css");
const extractSASS = new ExtractTextPlugin("stylesheets/[name]-two.css");

module.exports = merge(common, {
  mode: "production",
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
      prod: true,
      template: "./src/index.hbs",
      react: "production.min"
    }),
    new CopyWebpackPlugin([
      { from: "./src/vendors/", to: "vendors" },
      {
        from: "./node_modules/react/umd/react.production.min.js",
        to: "./"
      },
      {
        from: "./node_modules/react-dom/umd/react-dom.production.min.js",
        to: "./"
      }
    ])
  ]
});
