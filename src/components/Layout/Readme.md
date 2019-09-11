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
      top={[0, null]}
      left={['-12rem', null]}
      bottom={[0, null]}
      zIndex={[5, null]}
      display={['none', 'initial']}
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
      {/* Content Container */}
      <Flex>
        {/* Content */}
        <Layout.Content
          flex='1'
          bg='primary.0'
          p={[2, 3]}
          flexDirection='column'
        >
          <Flex bg='lightblue' p='2' m={[2, 3]} justifyContent='center'>
            12
          </Flex>
          <Flex flexDirection={['column', 'row']}>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 2]}
              justifyContent='center'
            >
              6
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 2]}
              justifyContent='center'
            >
              6
            </Flex>
          </Flex>
          <Flex flexDirection={['column', 'row']}>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 3]}
              justifyContent='center'
            >
              4
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 3]}
              justifyContent='center'
            >
              4
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 3]}
              justifyContent='center'
            >
              4
            </Flex>
          </Flex>
          <Flex flexDirection={['column', 'row']}>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 4]}
              justifyContent='center'
            >
              3
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 4]}
              justifyContent='center'
            >
              3
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 4]}
              justifyContent='center'
            >
              3
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 4]}
              justifyContent='center'
            >
              3
            </Flex>
          </Flex>
          <Flex flexDirection={['column', 'row']}>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 6]}
              justifyContent='center'
            >
              2
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 6]}
              justifyContent='center'
            >
              2
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 6]}
              justifyContent='center'
            >
              2
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 6]}
              justifyContent='center'
            >
              2
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 6]}
              justifyContent='center'
            >
              2
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 6]}
              justifyContent='center'
            >
              2
            </Flex>
          </Flex>
          <Flex flexDirection={['column', 'row']}>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 12]}
              justifyContent='center'
            >
              1
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 12]}
              justifyContent='center'
            >
              1
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 12]}
              justifyContent='center'
            >
              1
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 12]}
              justifyContent='center'
            >
              1
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 12]}
              justifyContent='center'
            >
              1
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 12]}
              justifyContent='center'
            >
              1
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 12]}
              justifyContent='center'
            >
              1
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 12]}
              justifyContent='center'
            >
              1
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 12]}
              justifyContent='center'
            >
              1
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 12]}
              justifyContent='center'
            >
              1
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={[null, 1 / 12]}
              justifyContent='center'
            >
              1
            </Flex>
            <Flex
              bg='lightblue'
              py='3'
              m={[2, 3]}
              width={['initial', 1 / 12]}
              justifyContent='center'
            >
              1
            </Flex>
          </Flex>
        </Layout.Content>
        {/* Right Panel */}
        <Layout.RightPanel
          justifyContent='center'
          bg='orange'
          p='3'
          position={['absolute', 'initial']}
          width='12rem'
          top={[0, null]}
          right={['-12rem', null]}
          bottom={[0, null]}
          zIndex={[5, null]}
          display={['none', 'initial']}
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
