import React from 'react';
import styled from 'styled-components';
import { space, color, typography, border, variant } from 'styled-system';
import PropTypes from 'prop-types';

// React component base
function NavBarBase(props) {
  // console.log('props', props);
  return (
    <nav>
      <ul>{props.children}</ul>
    </nav>
  );
}

// Styled NavBarBase component
export const NavBar = styled(NavBarBase)`
  ${color}
  ${border}
`;

function NavBarItem(props) {
  const Tag = props.as;

  return (
    // The 'as' keyword overwrites the entire component
    // as the single element
    // which is why the li style below is not working
    <li>
      <Tag {...props}>{props.children}</Tag>
    </li>
  );
}

NavBar.Item = styled(NavBarItem)`
  ${space}
  ${color}
  ${typography}
  ${border}

  font-family: ${({ theme }) => theme.fonts.body};


  /* li + li {
    margin-right: ${({ theme }) => theme.space[3]};
  } */

  /* @prop - size */
  /* If we want to make them responsive, apply props as array to component */
  ${variant({
    prop: 'type',
    variants: {
      tab: {
        border: 'tertiary',
        fontSize: 2,
        p: 2
      },
      underline: {
        fontSize: 2,
        p: 2
      },
      pill: {
        fontSize: 2,
        p: 2,
        bg: 'primary.0',
        borderRadius: 2,
        color: 'white.0'
      }
    }
  })}


`;

// // Styled Tabs
// const Tab = styled.a`
//   margin-bottom: -1px;
// `;

// // Underline
// const Underline = styled.a``;

// // Pill
// const Pill = styled.a``;

NavBar.propTypes = {
  /* URL to be used for the NavBar */
  href: PropTypes.string,
  /** i.e. 1 or [3, 2, 1] for responsiveness */
  fontSize: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string
  ]),
  /** Colored border bottom of selected tab */
  selected: PropTypes.bool
};

NavBar.Item.defaultProps = {
  as: 'a',
  underline: false,
  color: 'primary'
};

NavBar.Item.propTypes = {
  as: PropTypes.string
};

/** @component */
export default NavBar;
