The `Menu` component serves as a sidepanel menu container; It is NOT _flexible_ nor responsive.

Values are fixed on this component due to the narrow visual aspects of it. It will generally be flushed to the left or right of the screen. In addition, the system prop _typography_ will be given to `Menu.Item` to increase flexibility for font-sizes and font-family.

```js
<Menu>
  <Menu.Item>Menu Component 1</Menu.Item>
  <Menu.Item>Menu Component 2</Menu.Item>
</Menu>;
{
  /*

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
*/
}
```
