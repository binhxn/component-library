import styled from 'styled-components';
import {
  space,
  layout,
  color,
  border,
  typography,
  flexbox
  // theme
} from 'styled-system';
import PropTypes from 'prop-types';

const Box = styled.div`
  ${flexbox}
  ${typography}
  ${space}
  ${layout}
  ${color}
  ${border}

  /* font-family: ${theme.fontFamily.body}; */
  box-sizing: border-box;
  border: 1px solid #ccc;
`;

Box.propTypes = {
  /** type of theme */
  variant: PropTypes.string
};

/** @component */
export default Box;
