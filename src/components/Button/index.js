// example Button with variants
import styled from 'styled-components';
import { variant } from 'styled-system';
import PropTypes from 'prop-types';

const Button = styled.button.attrs(({ type }) => ({
  // we can define dynamic HTML attributes
  type
}))`
  /* all styles follow after the backticks */
  /* @prop - variant */
  ${variant({
    variants: {
      primary: {
        bg: 'primary',
        border: 'none',
        color: 'white'
      },
      secondary: {
        bg: 'secondary',
        border: 'none',
        color: 'white'
      },
      tertiary: {
        border: 'tertiary',
        color: 'tertiary'
      }
    }
  })}

  /* @prop - size */
  ${variant({
    prop: 'size',
    variants: {
      small: {
        fontSize: 1,
        p: 1,
        m: 1
      },
      medium: {
        fontSize: 2,
        p: 2,
        m: 1
      },
      large: {
        fontSize: 3,
        p: 3,
        m: 1
      }
    }
  })}

  /* TODO: Figure out how to theme later */
  /* ${variant({
    prop: 'size',
    key: 'buttonSizes'
  })} */

  border-radius: 3px;
  box-sizing: border-box;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  /* TODO: Save this for links or input fields */
  &:focus {
    outline: ${({ theme, variant }) => `2px dotted ${theme.colors[variant]}`};
    outline-offset: 5px;
  }

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}
  }
`;

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  size: 'medium',
  disabled: false
};

Button.propTypes = {
  /** type of button */
  type: PropTypes.string,
  /** `small`, `medium`, `large` */
  size: PropTypes.string,
  /** `primary`, `secondary`, `tertiary` */
  variant: PropTypes.string,
  /** HTML attr */
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.node])
};

/** @component */
export default Button;
