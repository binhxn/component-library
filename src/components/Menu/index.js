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
  border: none;
  cursor: pointer;
  font-size: ${themeGet('fontSizes.0')}px;
  outline: none;
  outline-offset: -1px;
  padding: 10px 20px;
  text-align: left;
  width: 100%;

  &:focus {
    outline: 1px solid ${themeGet('colors.tertiary.1')};
  }

  &:hover {
    background: ${themeGet('colors.tertiary.1')};
  }

  &:active {
    background: ${themeGet('colors.tertiary.2')};
  }

  /* @prop - variant */
  ${variant({
    variants: {
      active: {
        bg: 'primary.0',
        border: 'none',
        color: 'white.0',
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

/** @component */
export default Menu;
