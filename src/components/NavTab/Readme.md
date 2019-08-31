<!-- ## NavTab.Item - Props & Methods

| Prop name  | Type     | Default | Description                        |
| ---------- | -------- | ------- | ---------------------------------- |
| `as`       | `string` |         | Render as different HTML element   |
| `selected` | `bool`   | false   | Creates border around selected tab | -->

Use the `TabNav` component to style navigation with a tab-based selected state, typically used for navigation placed at the top of the page.

To use UnderlineNav with [react-router](https://github.com/ReactTraining/react-router) or [react-router-dom](https://www.npmjs.com/package/react-router-dom), pass `as={NavLink}` and omit the `selected` prop. This ensures that the NavLink gets `activeClassName='selected'`

```js
<NavTab>
  <NavTab.Item selected href='#navtab'>
    Link 1
  </NavTab.Item>
  <NavTab.Item href='#navtab'>Link 2</NavTab.Item>
  <NavTab.Item href='#navtab'>Link 3</NavTab.Item>
</NavTab>
```
