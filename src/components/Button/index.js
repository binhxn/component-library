// example Button with variants
import React from 'react';
import styled from 'styled-components';
import { color, variant, typography, space } from 'styled-system';
import PropTypes from 'prop-types';

const BUTTON_TEXT_CLASS = 'button-text';

function ButtonBase({ icon, children, ...rest }) {
  if (icon) {
    return <button></button>;
  }

  return <button {...rest}>{children}</button>;
}

const Button = styled(ButtonBase).attrs(({ type, variant }) => ({
  // we can define dynamic HTML attributes
  type,
  className: `${variant === 'text' ? BUTTON_TEXT_CLASS : ''}`
}))`

  /* @prop - variant */
  ${variant({
    variants: {
      primary: {
        bg: 'primary.0',
        border: 'none',
        color: 'white.0'
      },
      secondary: {
        bg: 'secondary.0',
        border: 'none',
        color: 'white.0'
      },
      tertiary: {
        border: 'tertiary',
        color: 'tertiary'
      }
    }
  })}


  /* @prop - size */
  /* If we want to make them responsive, apply props as array to component */
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
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:hover {
    background: ${({ theme, variant }) => theme.colors[variant][1]};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}
  }

  &:active {
    background: ${({ theme, variant }) => theme.colors[variant][2]};
  }

  /* TODO: Discuss if we want to make this a variant or other prop */
  &.button-text {
    border: none;

    &:hover {
      background: ${({ theme }) => theme.colors.tertiary[1]}
    }
  }

  ${typography}
  ${space}
  ${color}
`;

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  size: 'medium',
  disabled: false,
  children: 'Button'
};

Button.propTypes = {
  /** type of button */
  type: PropTypes.string,
  /** `small`, `medium`, `large` */
  size: PropTypes.string,
  /** `primary`, `secondary`, `tertiary` */
  variant: PropTypes.string,
  /** HTML attr */
  disabled: PropTypes.bool,
  /** Content to render */
  children: PropTypes.node.required
};

/** @component */
export default Button;
