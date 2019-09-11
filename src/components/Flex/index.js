import styled from 'styled-components';
import { flexbox } from 'styled-system';
import PropTypes from 'prop-types';
import Box from '../Box';

const Flex = styled(Box)`
  ${flexbox};
`;

// Keeping this around for backwards compatibility, but it's the same as `FLEX`
Flex.Item = styled(Box)`
  ${flexbox};
`;

Flex.defaultProps = {
  display: 'flex'
};

Flex.Item.defaultProps = {
  // theme
};

Flex.propTypes = {
  ...Box.propTypes
};

Flex.Item.propTypes = {
  theme: PropTypes.object
};

/** @component */
export default Flex;
