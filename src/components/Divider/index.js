import React from 'react';
import styled from 'styled-components';
import { space, color, border, layout } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import PropTypes from 'prop-types';

const DIVIDER_CLASS = 'divider';

function DividerBase({ children, ...rest }) {
  if (children) {
    return <div {...rest}>{children}</div>;
  }

  return <div {...rest} />;
}

const Divider = styled(DividerBase).attrs(({ children }) => ({
  className: `${children ? DIVIDER_CLASS : ''}`
}))`
  font-family: ${({ theme }) => theme.fonts.body};
  width: 100%;

  &.${DIVIDER_CLASS} {
    background: transparent;
    display: flex;
    flex-direction: row;
    height: 100%;

    &::before,
    &::after {
      content: '';
      background: ${({ bg }) => themeGet(`colors.${bg}`)};
      /* Do we want background to be flexible or only theme colors? */
      flex: 1;
      height: 1px;
      align-self: center;
    }

    &::before {
      margin-right: 15px; /* hardcoded. should it be flexible? */
    }

    &::after {
      margin-left: 15px; /* hardcoded. should it be flexible? */
    }
  }

  ${space}
  ${layout}
  ${color}
  ${border}
`;

Divider.defaultProps = {
  bg: 'tertiary.2',
  height: 1
};

Divider.propTypes = {
  /** color or shade : `primary` or  `primary.0` */
  bg: PropTypes.string,
  /** `primary`, `secondary`, `tertiary` */
  colors: PropTypes.string,
  /** padding - i.e. 1, '1', or [1, 2, 3] for responsiveness */
  p: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string]),
  /** divider thickness */
  height: PropTypes.number
};

/** @component */
export default Divider;
