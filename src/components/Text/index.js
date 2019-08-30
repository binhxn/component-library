import styled from 'styled-components';
import { space, color, typography } from 'styled-system';
import PropTypes from 'prop-types';
import theme from '../theme';

const Text = styled.span`
  ${typography}
  ${space}
  ${color}

  font-family: ${({ theme }) => theme.fonts.body};
  /* border: ${({ theme }) => `1px solid ${theme.colors.tertiary}`}; */
`;

Text.defaultProps = {
  theme
};

Text.propTypes = {
  /** `primary`, `secondary`, `tertiary` */
  colors: PropTypes.string,
  /** i.e. 1/3 or [1, 1/2, 1/3] for responsiveness */
  fontSize: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  /** padding - i.e. 1 or [1, 2, 3] for responsiveness */
  p: PropTypes.number
};

/** @component */
export default Text;
