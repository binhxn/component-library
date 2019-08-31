import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import PropTypes from 'prop-types';

// React component base
function NavTabBase(props) {
  return (
    <nav {...props}>
      <div>{props.children}</div>
    </nav>
  );
}

// Styled NavTabBase component
export const NavTab = styled(NavTabBase)`
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.primary[0]}`};

  & > div {
    display: flex;
    margin: 0;
    padding: 0;
    margin-bottom: -1px;
  }
`;

NavTab.Item = styled.a.attrs(props => ({
  className: `${props.selected ? 'selected' : ''} tab`
}))`
  ${space}

  list-style-type: none;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;

  a {
  }

  &.tab {
    display: block;
    padding: ${({ theme }) => theme.space[2]}px;
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
  ])
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
