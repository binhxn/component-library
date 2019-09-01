import React from 'react';
import styled from 'styled-components';
import { space, variant } from 'styled-system';
import PropTypes from 'prop-types';

// React component base
// TODO: Create a separate file so this soon-to-be named NavBarBase
// can be reused with other Nav-type components
function NavTabBase(props) {
  return (
    <nav {...props}>
      <div>{props.children}</div>
    </nav>
  );
}

// Styled NavTabBase component
export const NavTab = styled(NavTabBase)`
  ${space}
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.primary[0]}`};

  & > div {

    /* @prop - size */
    /* If we want to make them responsive, apply props as array to component */
    ${variant({
      prop: 'position',
      variants: {
        left: {
          justifyContent: 'flex-start' /* probably not needed */
        },
        center: {
          justifyContent: 'center'
        },
        right: {
          justifyContent: 'flex-end'
        }
      }
    })}

    display: flex;
    margin: 0;
    padding: 0;
    margin-bottom: -1px;

    & > a {
      flex: ${({ position }) => (position === 'center' ? 1 : null)};
      text-align: ${({ position }) =>
        position === 'center' ? 'center' : null};
    }
  }
`;

NavTab.Item = styled.a.attrs(props => ({
  className: `${props.selected ? 'selected' : ''}`
}))`
  ${space}

  list-style-type: none;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;

  display: block;
  padding: ${({ theme }) => `${theme.space[2]}px ${theme.space[3]}px`};
  color: ${({ theme }) => theme.colors.slateGrey[0]};
  text-decoration: none; /* Consult with David */
  border-radius: ${({ theme }) =>
    `${theme.radii[2]}px ${theme.radii[2]}px 0 0`};
  border: 1px solid transparent;

  &.selected,
  &:hover {
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.primary[0]};
    color: ${({ theme }) => theme.colors.slateGrey[2]};
  }

  &.selected {
    border-color: ${({ theme }) =>
      `${theme.colors.primary[0]} ${theme.colors.primary[0]} ${
        theme.colors.white[0]
      }`};
  }
`;

NavTab.defaultProps = {
  href: '#'
};

NavTab.propTypes = {
  /** URL to be used for the NavTab */
  href: PropTypes.string,
  /** i.e. 1 or [3, 2, 1] for responsiveness */
  fontSize: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string
  ]),
  /** `left`, `center`, `right` */
  position: PropTypes.string,
  /* spacing - including margin, width, height */
  p: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string])
};

NavTab.Item.defaultProps = {
  selected: false
};

NavTab.Item.propTypes = {
  /** Render as different HTML element */
  as: PropTypes.string,
  /** Creates border around selected tab */
  selected: PropTypes.bool
};

/** @component */
export default NavTab;
