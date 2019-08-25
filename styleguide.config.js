const path = require('path');
const { version } = require('./package.json');
const { styles, theme } = require('./styleguide.styles');

module.exports = {
  title: `One v${version}`,
  // editorConfig: { theme: 'cobalt' },
  serverPort: 4000,
  usageMode: 'expand',
  styles,
  theme,
  getComponentPathLine: componentPath => {
    const dirname = path.dirname(componentPath, '.js');
    const name = dirname.split('/').slice(-1)[0];

    return `import { ${name} } from '@endpoint-one'`;
  },
  // pagePerSection: process.env.NODE_ENV !== 'production',
  styleguideComponents: {
    Logo: path.join(__dirname, 'lib/components/Logo')
  },
  sections: [
    {
      name: '',
      content: 'src/components/Readme.md'
    },
    {
      name: 'Components',
      components: () => [
        path.resolve(__dirname, 'src/components/Button', 'index.js')
      ]
    }
    // TODO: Theming
    // {
    //   name: 'Theming',
    //   components: () => ([
    //     path.resolve(__dirname, 'src/components/theme', 'index.js')
    //   ])
    // },
  ]
};
