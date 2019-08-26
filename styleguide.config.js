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
  template: {
    favicon: './assets/endpoint-favicon.png'
  },
  getComponentPathLine: componentPath => {
    const dirname = path.dirname(componentPath, '.js');
    const name = dirname.split('/').slice(-1)[0];

    return `import { ${name} } from '@endpoint-one'`;
  },
  // pagePerSection: process.env.NODE_ENV !== 'production',
  styleguideComponents: {
    Logo: path.join(__dirname, 'lib/components/Logo'),
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper')
  },
  sections: [
    {
      name: '',
      content: 'src/components/Readme.md'
    },
    {
      name: 'Components',
      components: () => [
        path.resolve(__dirname, 'src/components/Box', 'index.js'),
        path.resolve(__dirname, 'src/components/Button', 'index.js')
      ]
    },
    {
      // Displays sub-section without component and only readme
      name: 'Theme',
      sections: [
        { name: 'Typography', content: 'src/theme/typography/Readme.md' }
      ]
    }
  ]
};
