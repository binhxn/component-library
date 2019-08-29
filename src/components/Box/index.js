import styled from 'styled-components';
import {
  space,
  layout,
  color,
  border,
  typography,
  flexbox
} from 'styled-system';
import PropTypes from 'prop-types';

const Box = styled.div`
  ${flexbox}
  ${typography}
  ${space}
  ${layout}
  ${color}
  ${border}

  font-family: ${({ theme }) => theme.fonts.body};
  box-sizing: border-box;
  /* border: ${({ theme }) => `1px solid ${theme.colors.tertiary}`}; */
`;

Box.propTypes = {
  /** `primary`, `secondary`, `tertiary` */
  borders: PropTypes.string,
  /** `primary`, `secondary`, `tertiary` */
  colors: PropTypes.string,
  /** i.e. 1/3 or [1, 1/2, 1/3] for responsiveness */
  width: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  /** i.e. 1 or [1, 2, 3] for responsiveness */
  fontSize: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  /** padding - i.e. 1 or [1, 2, 3] for responsiveness */
  p: PropTypes.number
};

/** @component */
export default Box;
