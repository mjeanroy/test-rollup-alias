const path = require('path');
const alias = require('rollup-plugin-alias');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  dest: path.join(__dirname, 'dist', 'index.js'),
  format: 'es',
  plugins: [
    alias({
      'underscore': 'lodash',
    }),

    nodeResolve(),
    commonjs(),
  ],
};
