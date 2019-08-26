/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

export const Box = props => (
  <div
    {...props}
    sx={{
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: 4, // picks up value from `theme.fontSizes[4]`
      // color: 'primary', // picks up value from `theme.colors.primary`
      // border: 'primary', // picks up value from `theme.border.primary`
      // bg: 'secondary', // picks up value from `theme.bg.secondary`
      borderRadius: 2, // picks up value from `theme.radii[2]`
      radii: 2,
      padding: 3
    }}
  >
    {props.children}
  </div>
);

Box.propTypes = {
  /** type of theme */
  variant: PropTypes.string
};
