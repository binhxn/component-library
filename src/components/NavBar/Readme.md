NavBar wraps its children in a `<nav>` element. Each child component has the flexibility to be displayed as their own element, such as an `<a>` or `<button>` element. If you plan on using **`react-router-dom`**, the `<Link>` component will also work as expected. Styles are reflected based on the element itself.

NavBar can have one of three types:

- Tabs
- Underline
- Pill

```js
<NavBar borderBottom="1px solid" borderColor="primary.0">
  <NavBar.Item selected type='tab'>
    <a  href='#navbar'>Link 1</a>
  </NavBar.Item>
  <NavBar.Item href='#navbar' type='tab'>
    <a  href='#navbar'>Link 2</a>
  </NavBar.Item>
  <NavBar.Item href='#navbar' type='tab'>
    <a  href='#navbar'>Link 3</a>
  </NavBar.Item>
</NavBar>

<br />

<NavBar>
  <NavBar.Item selected type='underline'>
    <a  href='#navbar'>Link 1</a>
  </NavBar.Item>
  <NavBar.Item type='underline'>
    <a  href='#navbar'>Link 2</a>
  </NavBar.Item>
  <NavBar.Item type='underline'>
    <a  href='#navbar'>Link 3</a>
  </NavBar.Item>
</NavBar>

<br />

<NavBar>
  <NavBar.Item selected type='pill'>
    <a  href='#navbar'>Link 1</a>
  </NavBar.Item>
  <NavBar.Item type='pill'>
    <a  href='#navbar'>Link 2</a>
  </NavBar.Item>
  <NavBar.Item type='pill'>
    <a  href='#navbar'>Link 3</a>
  </NavBar.Item>
</NavBar>

```
