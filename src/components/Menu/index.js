// This component was made specifically for a left-side panel
// for Gatsby documentation center;

import styled from 'styled-components';
import { space, layout, color, typography, variant } from 'styled-system';
import PropTypes from 'prop-types';
import { themeGet } from '@styled-system/theme-get';

const Menu = styled.nav`
  font-family: ${themeGet('fonts.body', 'sans-serif')};

  ${space}
  ${layout}
  ${color}
`;

Menu.Item = styled.button`
  border: none;
  cursor: pointer;
  display: block;
  font-size: ${themeGet('fontSizes.0')}px;
  outline: 1px solid transparent;
  outline-offset: -1px;
  text-decoration: none;
  padding: ${themeGet('space.2')}px ${themeGet('space.4')}px;
  width: 100%;

  /**
    * Disable browser default styles,
    * especially on Gatsby's Link component
    */
  &[type='button'] {
    appearance: none;
  }

  /* @prop - variant */
  /* variants only get value from themes */
  ${variant({
    variants: {
      normal: {
        color: 'text',
        '&:active': {
          color: 'text',
          bg: 'tertiary.2',
        },
        '&:hover': {
          bg: 'tertiary.1',
        },
        '&:focus': {
          color: 'text',
          outline: 'primary', // custom theme prop
        },
        '&:visited': {
          color: 'text',
        },
      },
      active: {
        bg: 'primary.0',
        color: 'white.0',
        '&:visited': {
          color: 'white.0',
        },
      },
    },
  })}

  ${typography}
`;

Menu.propTypes = {
  /** `primary`, `secondary`, `tertiary` */
  colors: PropTypes.string,
  /** i.e. 1/3 or [1, 1/2, 1/3] for responsiveness */
  width: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  /** padding - i.e. 1, '1', or [1, 2, 3] for responsiveness */
  p: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string]),
  /** marging - i.e. 1, '1', or [1, 2, 3] for responsiveness */
  m: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string]),
};

Menu.Item.defaultProps = {
  variant: 'normal',
};

/** @component */
export default Menu;
