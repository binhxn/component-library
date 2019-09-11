TODO: LAYOUT COMPONENTS

```js
import Box from '../Box';
import Flex from '../Flex';
import Text from '../Text';
import Button from '../Button';

<Layout flexDirection='column' position='relative'>
  {/* NavBar */}
  <Layout.NavBar
    bg='lightgreen'
    p='3'
    alignItems='center'
    justifyContent={['space-between', 'center']}
  >
    <Button variant='text' display={['block', 'none']}>
      Menu1
    </Button>
    <Text as='h4'>NavBar</Text>
    <Box />
  </Layout.NavBar>
  <Flex className='content-wrapper' flexDirection='row'>
    {/* Left Panel */}
    <Layout.LeftPanel
      bg='pink'
      p='3'
      position={['absolute', 'initial']}
      width='12rem'
      // top={[0, null]}
      // left={['-12rem', null]}
      // bottom={[0, null]}
      // zIndex={[5, null]}
    >
      <Text as='h4' textAlign='center'>
        Left Panel
      </Text>
    </Layout.LeftPanel>
    <Flex className='subcontent-wrapper' flexDirection='column' flex='1'>
      {/* SubNavBar */}
      <Layout.SubNavBar bg='papayawhip' p='3' justifyContent='center'>
        <Text as='h4'>SubNavBar</Text>
      </Layout.SubNavBar>
      <Flex position='relative' height='300px'>
        {/* Content */}
        <Layout.Content justifyContent='center' flex='1' bg='lightblue' p='3'>
          <Text as='h4'>Content</Text>
        </Layout.Content>
        {/* Right Panel */}
        <Layout.RightPanel
          justifyContent='center'
          bg='orange'
          p='3'
          width='12rem'
        >
          <Text as='h4'>Right Panel</Text>
        </Layout.RightPanel>
      </Flex>
    </Flex>
  </Flex>
  <Layout.Footer bg='yellow' p='3'>
    <Text as='h4' textAlign='center'>
      Footer
    </Text>
  </Layout.Footer>
</Layout>;
```

### IMPLEMENTATION 1:

```js
import Box from '../Box';
import Flex from '../Flex';

<Layout flexDirection='column'>
  {/* NavBar */}
  <Layout.NavBar bg='lightgreen' p='3'>
    NavBar
  </Layout.NavBar>
  <Box className='overall-wrapper' position='relative'>
    <Flex height='100%'>
      {/* SubNavBar */}
      <Layout.SubNavBar bg='papayawhip' p='2' width={1}>
        SubNavBar
      </Layout.SubNavBar>
      {/* Left Panel */}
      <Layout.LeftPanel
        position='absolute'
        bg='pink'
        // order='-1'
        width='100px'
        height='100%'
        p='2'
        flex='0 0 12em'
      >
        Left Panel
      </Layout.LeftPanel>
    </Flex>
    <Flex
      position='relative'
      flexDirection={['column', 'row']}
      height={['auto', '300px']}
    >
      {/* Content */}
      <Layout.Content ml='100px' bg='lightblue' flex='1' minWidth='0' p='2'>
        Content
      </Layout.Content>
      {/* Right Panel */}
      <Layout.RightPanel
        bg='orange'
        flexBasis='auto'
        flexBasis={[0, 64]}
        p='2'
        flex='0 0 12em'
      >
        Right Panel
      </Layout.RightPanel>
    </Flex>
  </Box>
  <Layout.Footer bg='yellow' p='2'>
    Footer
  </Layout.Footer>
</Layout>;
```
