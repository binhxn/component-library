/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

export const Button = props => {
  // console.log(props.buttonSize);
  // const buttonSize = `theme.buttonSize.${props.buttonSize}`;

  return (
    <button
      type={props.type}
      sx={{
        variant: `buttons.${props.variant}`,
        // padding: props.buttonSize,
        padding: theme => `${theme.buttonSize}.${props.buttonSize}`,
        borderRadius: 2
        // applies width 100% to all viewport widths,
        // width 50% above the first breakpoint,
        // and 25% above the next breakpoint
        // width: ['100%', '50%', '25%']
      }}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary'
};

Button.propTypes = {
  /** type of button */
  type: PropTypes.string,
  /** `small`, `medium`, `large` */
  size: PropTypes.string,
  /** `primary`, `secondary` */
  variant: PropTypes.string
};
