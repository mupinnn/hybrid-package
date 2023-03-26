const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const terser = require('@rollup/plugin-terser');
const bundleSize = require('rollup-plugin-bundle-size');

const NAME = 'hybrid';
const plugins = [
  resolve({ browser: true }),
  commonjs(),
  terser(),
  bundleSize(),
];

/** @type {import('rollup').RollupOptions[]} */
module.exports = [
  // ESM bundle
  {
    input: './src/index.js',
    output: {
      name: NAME,
      file: `dist/esm/${NAME}.js`,
      format: 'esm',
      exports: 'named',
    },
    plugins,
  },

  // CJS bundle
  {
    input: './src/index.js',
    output: {
      name: NAME,
      file: `dist/cjs/${NAME}.cjs`,
      format: 'cjs',
      exports: 'named',
    },
    plugins,
  },
];
