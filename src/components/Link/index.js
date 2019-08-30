import styled from 'styled-components';
import { color, typography } from 'styled-system';
import PropTypes from 'prop-types';

const Link = styled.a`
  ${typography}
  ${color}

  font-family: ${({ theme }) => theme.fonts.body};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  /* border: ${({ theme }) => `1px solid ${theme.colors.tertiary}`}; */

  /* Slack's accessibility outline feature */
  &:focus {
    /* incomplete dotted outline */
    outline: ${({ theme, color }) => `2px dotted ${theme.colors[color][1]}`};
    outline-offset: 5px;
  }

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: ${({ theme, color }) => theme.colors[color][1]};

  /* TODO: not working as expected */
  &:visited {
    color: none;
  }
}
`;

Link.defaultProps = {
  as: 'a',
  underline: false,
  color: 'primary'
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
