| Theme Key        | CSS Properties                                                                                                                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `colors`         | `color`, `background-color`, `border-color`                                                                                                                                                        |
| `fonts`          | `font-family`                                                                                                                                                                                      |
| `fontSizes`      | `font-size`                                                                                                                                                                                        |
| `fontWeights`    | `font-weight`                                                                                                                                                                                      |
| `lineHeights`    | `line-height`                                                                                                                                                                                      |
| `space`          | `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`, `padding`, `padding-top`, `padding-right`, `padding-bottom`, `padding-left`, `grid-gap`, `grid-column-gap`, `grid-row-gap` |
| `letterSpacings` | `letter-spacing`                                                                                                                                                                                   |
| `sizes`          | `width`, `height`, `min-width`, `max-width`, `min-height`, `max-height`                                                                                                                            |
| `borders`        | `border`, `border-top`, `border-right`, `border-bottom`, `border-left`                                                                                                                             |
| `borderWidths`   | `border-width`                                                                                                                                                                                     |
| `borderStyles`   | `border-style`                                                                                                                                                                                     |
| `radii`          | `border-radius`                                                                                                                                                                                    |
| `shadows`        | `box-shadow`, `text-shadow`                                                                                                                                                                        |
| `zIndices`       | `z-index`                                                                                                                                                                                          |

## The **_as_** prop

All **One** Components have access to the `as` prop, provided by [styled-components](https://www.styled-components.com/docs/api#as-polymorphic-prop). We use the _as_ prop to render a component with the styles of the passed component in _as_, but with the system props of the base component.
