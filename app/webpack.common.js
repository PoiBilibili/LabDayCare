const path = require("path");

module.exports = {
  output: {
    filename: "[name].bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },

  // Enable sourcemaps for debugging webpack's output.
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  resolveLoader: {
    modules: ["node_modules"]
  },

  module: {
    rules: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        use: ["awesome-typescript-loader"]
      },
      { test: /\.handlebars$|\.hbs$/, loader: "handlebars-loader" }
      // All files with a '.ts' or '.tsx' extension will be checked by 'tslint-loader'.
      // { test: /\.tsx?$/, enforce: "pre", loader: "tslint-loader" },
    ]
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
