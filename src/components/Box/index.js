import styled from 'styled-components';
import {
  space,
  layout,
  color,
  border,
  typography,
  position
} from 'styled-system';
import PropTypes from 'prop-types';
import { themeGet } from '@styled-system/theme-get';

const Box = styled.div`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  box-sizing: border-box;

  ${typography}
  ${space}
  ${layout}
  ${color}
  ${border}
  ${position}
`;

Box.propTypes = {
  /** `primary`, `secondary`, `tertiary` */
  borders: PropTypes.string,
  /** `primary`, `secondary`, `tertiary` */
  colors: PropTypes.string,
  /** i.e. 1/3 or [1, 1/2, 1/3] for responsiveness */
  width: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string
  ]),
  /** i.e. 1, '1', or [1, 2, 3] for responsiveness */
  fontSize: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string
  ]),
  /** padding - i.e. 1, '1', or [1, 2, 3] for responsiveness */
  p: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string])
};

/** @component */
export default Box;
