const path = require('path');
const { version } = require('./package.json');

module.exports = {
  title: `One v${version}`,
  // editorConfig: { theme: 'cobalt' },
  serverPort: 4000,
  usageMode: 'expand',
  getComponentPathLine: componentPath => {
    const dirname = path.dirname(componentPath, '.js');
    const name = dirname.split('/').slice(-1)[0];
    // const componentName = name;

    return `import { ${name} } from '@endpoint-one'`;
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
