import styled from 'styled-components';
import { typography } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import PropTypes from 'prop-types';

const Link = styled.a.attrs({ role: 'link' })`
  font-size: ${themeGet('fontSizes.1')}px;
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  text-decoration: none;
  border-bottom: 1px solid;
  border-color: ${({ underline, color }) =>
    underline ? `${themeGet(`colors.${color}.1`)}` : `transparent`};

  }


  /* Slack's accessibility outline feature */
  &:focus {
    /* TODO: need to revisit */
    /* outline: ${({ theme, color }) =>
      `2px dotted ${themeGet(`colors.${color}.1`)}`}; */
    outline-color: ${({ color }) => `${themeGet(`colors.${color}.1`)}`};
    outline-width: 2px;
    outline-style: dotted;
    outline-offset: 5px;
  }

  /* Order matters, :visited must be above :hover and :active */
  &:visited {
    color: ${({ color }) => themeGet(`colors.${color}.2`)};
  }

  &:hover {
    /* better hover effect than underline */
    border-bottom-color: ${({ color }) => themeGet(`colors.${color}.1`)};;
    border-bottom-width: 2px;
  }

  &:active {
    color: ${({ color }) => themeGet(`colors.${color}.1`)};
  }

  ${typography}
`;

Link.defaultProps = {
  as: 'a',
  underline: false,
  color: 'primary',
};

Link.propTypes = {
  /* URL to be used for the Link */
  href: PropTypes.string,
  /** HTML element - Can be 'a', 'button', 'input' */
  as: PropTypes.string,
  /** `primary`, `secondary`, `tertiary` */
  color: PropTypes.string,
  /** i.e. 1 or [3, 2, 1] for responsiveness */
  fontSize: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  /** Adds underline to the link */
  underline: PropTypes.bool,
};

/** @component */
export default Link;
