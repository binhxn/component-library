const path = require('path');
const { version } = require('./package.json');
const { styles, theme } = require('./styleguide.styles');

module.exports = {
  title: `One v${version}`,
  // template: './styleguide.template.html',
  serverPort: 4000,
  usageMode: 'expand',
  styles,
  theme,
  template: {
    favicon: '/assets/endpoint-favicon.png',
  },
  getComponentPathLine: componentPath => {
    const dirname = path.dirname(componentPath, '.js');
    const name = dirname.split('/').slice(-1)[0];

    return `import { ${name} } from '@system-one/react'`;
  },
  // pagePerSection: true, // this was breaking links
  styleguideComponents: {
    Logo: path.join(__dirname, 'lib/components/Logo'),
    Wrapper: path.join(__dirname, 'src/EndpointProvider'),
  },
  sections: [
    {
      name: 'Getting Started',
      content: 'src/components/Readme.md',
    },
    {
      name: 'Components',
      components: () => [
        path.resolve(__dirname, 'src/components/Box', 'index.js'),
        path.resolve(__dirname, 'src/components/Button', 'index.js'),
        path.resolve(__dirname, 'src/components/Card', 'index.js'),
        path.resolve(__dirname, 'src/components/Divider', 'index.js'),
        path.resolve(__dirname, 'src/components/Flex', 'index.js'),
        path.resolve(__dirname, 'src/components/Grid', 'index.js'),
        path.resolve(__dirname, 'src/components/Layout', 'index.js'),
        path.resolve(__dirname, 'src/components/Link', 'index.js'),
        path.resolve(__dirname, 'src/components/Menu', 'index.js'),
        path.resolve(__dirname, 'src/components/Text', 'index.js'),
        path.resolve(__dirname, 'src/components/NavTab', 'index.js'),
        path.resolve(__dirname, 'src/components/NavUnderline', 'index.js'),
      ],
    },
    {
      // Displays sub-section without component and only readme
      name: 'Theme Spec',
      sections: [
        { name: 'Spec Table', content: 'src/spec/SpecTable/Readme.md' },
        { name: 'The -as- Prop', content: 'src/spec/AsProp/Readme.md' },
      ],
    },
  ],
};
