import React from 'react';
import styled from 'styled-components';
import { space, variant } from 'styled-system';
import PropTypes from 'prop-types';

// React component base
// TODO: Create a separate file so this soon-to-be named NavBarBase
// can be reused with other Nav-type components
function NavUnderlineBase(props) {
  return (
    <nav {...props}>
      <div>{props.children}</div>
    </nav>
  );
}

// Styled NavUnderlineBase component
const NavUnderline = styled(NavUnderlineBase)`
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

    & > a {
      flex: ${({ position }) => (position === 'center' ? 1 : null)};
      text-align: ${({ position }) =>
        position === 'center' ? 'center' : null};
    }
  }

  ${space}
`;

NavUnderline.Item = styled.a.attrs(props => ({
  className: `${props.selected ? 'selected' : ''}`
}))`
  color: ${({ theme }) => theme.colors.slateGrey[0]};
  display: block;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  list-style-type: none;
  padding: ${({ theme }) => `${theme.space[2]}px ${theme.space[3]}px`};
  text-decoration: none;
  /*transition: all 0.2s ease-in-out; // TODO: it's really slow */

  /* Order matters here for hover states */
  &:hover {
    border-bottom: 2px solid;
    border-color: ${({ theme }) => theme.colors.tertiary[2]};
    color: ${({ theme }) => theme.colors.slateGrey[2]};
  }

  &.selected {
    border-bottom: 2px solid;
    border-color: ${({ theme }) => theme.colors.primary[0]};
  }

  & + & {
    margin-left: ${({ theme }) => theme.space[3]}px;
  }

  ${space}
`;

NavUnderline.defaultProps = {
  href: '#'
};

NavUnderline.propTypes = {
  /** URL to be used for the NavUnderline */
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

NavUnderline.Item.defaultProps = {
  selected: false
};

NavUnderline.Item.propTypes = {
  /** Render as different HTML element */
  as: PropTypes.string,
  /** Creates border around selected tab */
  selected: PropTypes.bool
};

/** @component */
export default NavUnderline;
