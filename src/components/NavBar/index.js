import React from 'react';
import styled from 'styled-components';
import { space, color, typography, border, variant } from 'styled-system';
import PropTypes from 'prop-types';

// React component base
function NavBarBase(props) {
  // console.log('props', props);
  return (
    <nav {...props}>
      <ul>{props.children}</ul>
    </nav>
  );
}

// Styled NavBarBase component
export const NavBar = styled(NavBarBase)`
  ${color}
  ${border}

  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  li + li {
    margin-left: ${({ theme }) =>
      theme.space[3]}px; /* Need to refactor hardcoded value */
  }
`;

function NavBarItem(props) {
  return (
    // The 'as' keyword overwrites the entire component
    // as the single element
    // which is why the li style below is not working
    <li {...props}>{props.children}</li>
  );
}

NavBar.Item = styled(NavBarItem).attrs(props => ({
  // we can define dynamic HTML attributes
  className: `${props.selected ? 'selected' : ''} ${props.type}`
}))`
  ${space}
  ${color}
  ${typography}
  ${border}

  list-style-type: none;
  font-family: ${({ theme }) => theme.fonts.body};

  a {
    display: block;
    padding: ${({ theme }) => theme.space[2]}px;
    text-decoration: none; /* Consult with David */
  }

  &.tab {
    margin-bottom: -1px;

    & > a {
    }
  }

  &.selected {
    &.tab {
      border: 1px solid;
      border-color: ${({ theme }) =>
        `${theme.colors.primary[0]} ${theme.colors.primary[0]} ${
          theme.colors.white[0]
        }`};

      a {
        color: ${({ theme }) => theme.colors.slateGrey};

      }
    }

    &.underline {

      /* border: ${({ theme }) => theme.borders.primary}; */
    }

    &.pill {
      background: 'primary.0';

      a {
        color: '#fff'
      }
    }
  }

  /* li + li {
    margin-right: ${({ theme }) => theme.space[3]};
  } */

  /* @prop - size */
  /* If we want to make them responsive, apply props as array to component */
  ${variant({
    prop: 'type',
    variants: {
      tab: {
        fontSize: 2
        // p: 2
      },
      underline: {
        fontSize: 2
        // p: 2
      },
      pill: {
        fontSize: 2,
        // p: 2,
        borderRadius: 2,
        color: 'white.0'
      }
    }
  })}
`;

/* - selected && type === 'tab' */
/* - selected && type === 'underline' */
/* - selected && type === 'pill' */

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
  // as: 'a',
  underline: false,
  color: 'primary'
};

NavBar.Item.propTypes = {
  as: PropTypes.stringz
};

/** @component */
export default NavBar;
