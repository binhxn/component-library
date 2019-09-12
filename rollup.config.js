import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

export default {
  input: ['src/index.js'], // our source file
  output: [
    {
      file: pkg.main,
      format: 'cjs' // preferred format
    },
    {
      file: pkg.module,
      format: 'es' // preferred format
    }
  ],
  external: [
    // external - all the used libs needs to be here
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    // babel - needed for JSX with ES6 syntax
    // since this was created with CRA, we do not need to configure .babelrc
    babel({
      exclude: 'node_modules/**'
      // extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    // Note that rollup-plugin-commonjs should go before other plugins that
    // transform your modules — this is to prevent other plugins from
    // making changes that break the CommonJS detection.
    commonjs({
      namedExports: {
        // required due to manual exports due to styled-components
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef'
        ]
      }
    }),
    // resolve - teaches Rollup how to find external modules
    // https://rollupjs.org/guide/en/#with-npm-packages
    resolve({
      browser: true,
      preferBuiltins: false
    })
  ]
};
