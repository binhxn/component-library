The `Box` component serves as a layout container; It is _flexible_ and responsive.

**width** and **fontSize** are passed an array of values. When the browser scales from desktop to mobile view, the font size changes without the use of media queries. Instead, `styled-system` provides a **breakpoint** theme that allows you to adjust for multiple screen sizes.

Notice the font size:

```js
<Box
  color='primary'
  p={3}
  width={[1, 1/2, 1/3]}
  fontSize={[1,2,3]}
  border='primary'
>
  Box Component
</Box>
<Box
  color='primary'
  p={3}
  width={[1, 1/2, 1/3]}
  fontSize={[1,2,3]}
  border='primary'
>
  Box Component
</Box>


{/*

Below is a reference to object-styled responsive units

<Box
  fontFamily='body'
  color='primary'
  p={3}
  width={{ sm: 1, md: 1/2, lg: 1/3}}
  fontSize={{ sm: 1, md: 2, lg: 3}}
>
  Box Component
</Box>
*/}
```

By default, the `<Box />` component is the HTML element, `<div>`. For semantic purposes, we can change the HTML element using the `as` prop. Let's change the element type to `<section>` (You'll need to inspect the element through your browser's dev tools to check it):

```js
<Box as='section' color='primary' p={3} fontSize={[1, 2, 3]} border='primary'>
  Box Component
</Box>
```

## Holy Grail

TODO: Create `<Aside>` and `<Content>` components that are collapsible

```js
<Box>
  <Box bg='lightgreen' p='2'>
    Header
  </Box>
  <Box flex='1' flexDirection={['column', 'row']} display='flex'>
    <Box bg='lightblue' flex='1' minWidth='0' p='2'>
      Content
    </Box>
    <Box bg='pink' flexBasis='auto' flexBasis={[0, 64]} order='-1' p='2'>
      Left
    </Box>
    <Box bg='orange' flexBasis='auto' flexBasis={[0, 64]} p='2'>
      Right
    </Box>
  </Box>
  <Box bg='yellow' p='2'>
    Footer
  </Box>
</Box>
```
