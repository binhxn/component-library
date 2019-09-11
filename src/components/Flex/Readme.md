```js
<Flex flexWrap='nowrap'>
  <Flex.Item p={3} bg='primary.0' flex={1}>
    Item 1
  </Flex.Item>
  <Flex.Item p={3} bg='secondary.0'>
    Item 2
  </Flex.Item>
  <Flex.Item p={3} bg='tertiary.2'>
    Item 3
  </Flex.Item>
</Flex>
```

Holy Grail - Flex components

```js
import Box from '../Box';

<Flex flexDirection='column'>
  {/* NavBar */}
  <Box bg='lightgreen' p='2'>
    NavBar
  </Box>
  <Box className='overall-wrapper' position='relative'>
    <Flex height='100%'>
      {/* SubNavBar */}
      <Box bg='papayawhip' p='2' width={1}>
        SubNavBar
      </Box>
      {/* Left Panel */}
      <Flex
        position='absolute'
        bg='pink'
        // order='-1'
        width='100px'
        height='100%'
        p='2'
        flex='0 0 12em'
      >
        Left Panel
      </Flex>
    </Flex>
    <Flex
      position='relative'
      flexDirection={['column', 'row']}
      height={['auto', '300px']}
    >
      {/* Content */}
      <Flex ml='100px' bg='lightblue' flex='1' minWidth='0' p='2'>
        Content
      </Flex>
      {/* Right Panel */}
      <Flex
        bg='orange'
        flexBasis='auto'
        flexBasis={[0, 64]}
        p='2'
        flex='0 0 12em'
      >
        Right Panel
      </Flex>
    </Flex>
  </Box>

  <Box bg='yellow' p='2'>
    Footer
  </Box>
</Flex>;
```

<!-- Figure out toggleView for Layout HOC component later -->
