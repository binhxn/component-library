import styled from 'styled-components';
import { color, typography } from 'styled-system';
import PropTypes from 'prop-types';

const Link = styled.a`
  /* ${color} */
  ${typography}

  font-family: ${({ theme }) => theme.fonts.body};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};

  /* Slack's accessibility outline feature */
  &:focus {
    /* incomplete dotted outline */
    outline: ${({ theme, color }) => `2px dotted ${theme.colors[color][1]}`};
    outline-offset: 5px;
  }

  /* Order matters, :visited must be above :hover and :active */
  &:visited {
    color: ${({ theme, color }) => theme.colors[color][1]};
  }

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: ${({ theme, color }) => theme.colors[color][1]};

  /* TODO: not working as expected */

}
`;

Link.defaultProps = {
  as: 'a',
  underline: false,
  color: 'primary',
  fontSize: 2
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
    PropTypes.string
  ]),
  /** Adds underline to the link */
  underline: PropTypes.bool
};

/** @component */
export default Link;
