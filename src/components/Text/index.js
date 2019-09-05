import styled from 'styled-components';
import { space, color, typography, variant } from 'styled-system';
import PropTypes from 'prop-types';

const Text = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};

  ${typography}
  ${space}
  ${color}

  ${variant({
    prop: 'truncate',
    variants: {
      true: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
      }
    }
  })}
`;

Text.defaultProps = {
  truncate: false,
  as: 'span'
};

Text.propTypes = {
  /** `primary`, `secondary`, `tertiary` */
  colors: PropTypes.string,
  /** i.e. 1/3 or [1, 1/2, 1/3] for responsiveness */
  fontSize: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  /** padding - i.e. 1 or [1, 2, 3] for responsiveness */
  p: PropTypes.number,
  /** `h1`, `h2`, `h3`, `h4`, `p`, `span` */
  as: PropTypes.string,
  /** Whether it should truncate or not */
  truncate: PropTypes.bool
};

/** @component */
export default Text;
