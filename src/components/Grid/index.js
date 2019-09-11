import styled from 'styled-components';
import { grid } from 'styled-system';
import Box from '../Box';

const Grid = styled(Box)`
  ${grid};
`;

Grid.defaultProps = {
  display: 'grid'
};

Grid.propTypes = {
  ...Box.propTypes
};

/** @component */
export default Grid;
