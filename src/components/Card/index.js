import React from 'react';
import styled from 'styled-components';
import { flex, space, border, variant } from 'styled-system';
import PropTypes from 'prop-types';

import Box from '../Box';
// import Text from '../Text';
// import profilePicture from '../../assets/profilePicture.png';

function CardBase(props) {
  return (
    <Box as='section' {...props}>
      {props.children}
    </Box>
  );
}

const Card = styled(CardBase)`
  ${variant({
    variants: {
      border: {
        borderRadius: '2',
        border: 'tertiary'
      },
      shadow: {
        boxShadow: '0 1px 10px 0 rgba(0,0,0,0.25)',
        borderRadius: '2'
      }
    }
  })}
`;

Card.Main = styled(Box)`
  ${border}
  ${space}


  display: flex;
  flex-direction: row;
`;

Card.Image = styled.img.attrs(({ src, alt }) => ({
  src: `${src ? src : ''}`,
  alt: `${alt ? alt : ''}`
}))`
  height: 60px;
  width: 60px;
`;

Card.Content = styled(Box)`
  ${border}
  ${flex}
  ${space}

  align-self: ${({ children }) => {
    if (!Array.isArray(children)) {
      /* if children count is equal to one, then it is NOT an array. */
      return 'center';
    }
  }};
`;

Card.Action = styled(Box).attrs(props => ({
  className: `${props.selected ? 'selected' : ''}`
}))`
  ${flex}
  ${space}

  display: flex;
`;

Card.defaultProps = {
  color: 'primary'
};

Card.propTypes = {
  /** `border` or `shadow` */
  variant: PropTypes.string,
  /** `primary`, `secondary`, `tertiary` */
  color: PropTypes.string,
  /** i.e. 1 or [3, 2, 1] for responsiveness */
  fontSize: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string
  ])
};

/** @component */
export default Card;
