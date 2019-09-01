<!-- ## NavTab.Item - Props & Methods

| Prop name  | Type     | Default | Description                        |
| ---------- | -------- | ------- | ---------------------------------- |
| `as`       | `string` |         | Render as different HTML element   |
| `selected` | `bool`   | false   | Creates border around selected tab | -->

Use the `<NavTab />` component to style navigation with a tab-based selected state, typically used for navigation placed at the top of the page.

To use `<NavTab />` with [react-router](https://github.com/ReactTraining/react-router) or [react-router-dom](https://www.npmjs.com/package/react-router-dom), pass `as={NavLink}` and omit the `selected` prop. This ensures that the NavLink gets `activeClassName='selected'`

```js
<NavTab>
  <NavTab.Item selected href='#navtab'>
    Link 1
  </NavTab.Item>
  <NavTab.Item href='#navtab'>Link 2</NavTab.Item>
  <NavTab.Item href='#navtab'>Link 3</NavTab.Item>
</NavTab>
```

You can use the `position` prop to change the horizontal positioning of the **<NavTab />** component:

```js
<NavTab position='right'>
  <NavTab.Item selected href='#navtab'>
    Link 1
  </NavTab.Item>
  <NavTab.Item href='#navtab'>Link 2</NavTab.Item>
  <NavTab.Item href='#navtab'>Link 3</NavTab.Item>
</NavTab>
```

Or you can fill the width of the screen with equal-sized tabs when setting the `position` value to `center`:

```js
<NavTab position='center'>
  <NavTab.Item selected href='#navtab'>
    Link 1
  </NavTab.Item>
  <NavTab.Item href='#navtab'>Link 2</NavTab.Item>
  <NavTab.Item href='#navtab'>Link 3</NavTab.Item>
</NavTab>
```

The above is a contrived example of how we can center tabs. What if we don't want to expand the full width of the tabs, but only center it? That's another discussion to have.
