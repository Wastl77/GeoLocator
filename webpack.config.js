const path = require("path");

const OUT_DIR = 'dist/'

module.exports = {
  mode: "development",
  entry: {
    bundle: "./src/js/scripts.js",
  },
  output: {
    path: path.resolve(__dirname, OUT_DIR),
    filename: '[name].js',
  },
};
