/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
export const Button = props => (
  <button
    sx={{
      // applies width 100% to all viewport widths,
      // width 50% above the first breakpoint,
      // and 25% above the next breakpoint
      width: ['100%', '50%', '25%']
    }}
  >
    {props.children}
  </button>
);

// export default class Button extends Component {
//   render() {
//     return (
//       <StyledButton {...this.props} type={this.props.type}>
//         {this.props.children}
//       </StyledButton>
//     );
//   }
// }

Button.propTypes = {
  /** type of Button */
  type: PropTypes.string.isRequired
};
