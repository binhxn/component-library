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

Menu.Item = styled.button.attrs({ type: 'button' })`
  appearance: none;
  border: none;
  cursor: pointer;
  display: block;
  font-size: ${themeGet('fontSizes.0')}px;
  outline: 1px solid transparent;
  outline-offset: -1px;
  text-decoration: none;
  padding: 10px 20px;
  text-align: left;
  width: 100%;

  /* Disable anchor styles */
  &:visited {
    color: initial;
  }

  /* @prop - variant */
  /* variants only get value from themes */
  ${variant({
    variants: {
      normal: {
        '&:active': {
          bg: 'tertiary.2',
        },
        '&:hover': {
          bg: 'tertiary.1',
        },
        '&:focus': {
          outline: 'primary', // custom theme prop
        },
      },
      active: {
        bg: 'primary.0',
        color: 'white',
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
  borders: PropTypes.string,
  /** `primary`, `secondary`, `tertiary` */
  colors: PropTypes.string,
  /** i.e. 1/3 or [1, 1/2, 1/3] for responsiveness */
  width: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  /** i.e. 1, '1', or [1, 2, 3] for responsiveness */
  fontSize: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  /** padding - i.e. 1, '1', or [1, 2, 3] for responsiveness */
  p: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string]),
};

Menu.Item.defaultProps = {
  variant: 'normal',
};

/** @component */
export default Menu;
