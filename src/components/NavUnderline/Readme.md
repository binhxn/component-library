Use the `<NavUnderline />` component to style navigation with a tab-based selected state, typically used for navigation placed at the top of the page.

To use `<NavUnderline />` with [react-router](https://github.com/ReactTraining/react-router) or [react-router-dom](https://www.npmjs.com/package/react-router-dom), pass `as={NavLink}` and omit the `selected` prop. This ensures that the NavLink gets `activeClassName='selected'`

```js
<NavUnderline>
  <NavUnderline.Item selected href='#navunderline'>
    Link 1
  </NavUnderline.Item>
  <NavUnderline.Item href='#navunderline'>Link 2</NavUnderline.Item>
  <NavUnderline.Item href='#navunderline'>Link 3</NavUnderline.Item>
</NavUnderline>
```

You can use the `position` prop to change the horizontal positioning of the `<NavUnderline />` component:

```js
<NavUnderline position='right'>
  <NavUnderline.Item selected href='#navunderline'>
    Link 1
  </NavUnderline.Item>
  <NavUnderline.Item href='#navunderline'>Link 2</NavUnderline.Item>
  <NavUnderline.Item href='#navunderline'>Link 3</NavUnderline.Item>
</NavUnderline>
```

Or you can fill the width of the screen with equal-sized tabs when setting the `position` value to `center`:

```js
<NavUnderline position='center'>
  <NavUnderline.Item selected href='#navunderline'>
    Link 1
  </NavUnderline.Item>
  <NavUnderline.Item href='#navunderline'>Link 2</NavUnderline.Item>
  <NavUnderline.Item href='#navunderline'>Link 3</NavUnderline.Item>
</NavUnderline>
```
