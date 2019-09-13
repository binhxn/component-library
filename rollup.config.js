import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

const globals = {
  react: 'React',
  'styled-components': 'styled',
  'styled-system': 'styledSystem',
  '@styled-system/theme-get': 'themeGet'
};

export default {
  input: ['src/index.js'], // our source file
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      globals
    },
    {
      file: pkg.module,
      format: 'es',
      globals
    }
  ],
  external: [
    // external - all the used libs needs to be here
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  // Issue with theme.fonts.body
  plugins: [
    // resolve - teaches Rollup how to find external modules
    // https://rollupjs.org/guide/en/#with-npm-packages
    resolve({ mainFields: ['module', 'main'] }),
    // Note that rollup-plugin-commonjs _should_ go before other plugins that
    // transform your modules — this is to prevent other plugins from
    // making changes that break the CommonJS detection.
    commonjs({
      include: 'node_modules/**',
      // left-hand side can be an absolute path, a path
      // relative to the current directory, or the name
      // of a module in node_modules
      namedExports: {
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef'
        ]
      }
    }),
    // babel - needed for JSX with ES6 syntax
    babel({
      exclude: 'node_modules/**'
      // extensions: ['.js', '.jsx', '.ts', '.tsx']
    })
  ]
};
