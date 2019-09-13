import React from 'react';
import styled from 'styled-components';
import { space, variant } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import PropTypes from 'prop-types';

// React component base
// TODO: Create a separate file so this soon-to-be named NavBarBase
// can be reused with other Nav-type components
function NavTabBase({ children, ...rest }) {
  return (
    <nav {...rest}>
      <div>{children}</div>
    </nav>
  );
}

// Styled NavTabBase component
const NavTab = styled(NavTabBase)`
  ${space}
  border-bottom: 1px solid ${themeGet('colors.primary.0')};

  & > div {

    /* @prop - size */
    /* If we want to make them responsive, apply props as array to component */
    ${variant({
      prop: 'position',
      variants: {
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

  border: 1px solid transparent;
  border-radius: ${themeGet('radii.2')}px ${themeGet('radii.2')}px 0 0;
  color: ${themeGet('colors.slateGrey.0')};
  display: block;
  font-family: ${themeGet('fonts.body')};
  font-size: ${themeGet('fontSizes.1')}px;
  list-style-type: none;
  padding: ${themeGet('space.2')}px ${themeGet('space.3')}px;
  text-decoration: none; /* Consult with David */

  &.selected,
  &:hover {
    border: 1px solid;
    border-color: ${themeGet('colors.primary.0')};
    color: ${themeGet('colors.slateGrey.2')};
  }

  &.selected {
    border-color: ${themeGet('colors.primary.0')}
      ${themeGet('colors.primary.0')} ${themeGet('colors.white.0')};
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
  /** `center` or `right` */
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
