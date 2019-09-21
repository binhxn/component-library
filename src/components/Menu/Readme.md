The `Menu` component serves as a sidepanel menu container; It is NOT _flexible_ nor responsive.

Values are fixed on this component due to the narrow visual aspects of it. It will generally be flushed to the left or right of the screen. In addition, the system prop _typography_ will be given to `Menu.Item` to increase flexibility for font-sizes and font-family.

```js
<Menu>
  <Menu.Item variant='normal' as='a' href='#'>
    Menu Component 1
  </Menu.Item>
  <Menu.Item variant='active' as='a' href='#'>
    Menu Component 2
  </Menu.Item>
  <Menu.Item as='a' href='#'>
    Menu Component 3
  </Menu.Item>
</Menu>
```
