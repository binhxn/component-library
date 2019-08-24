import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { typography, space } from 'styled-system';

const StyledButton = styled.button`
  font-size: 12px;
  cursor: pointer;
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: white;
  color: palevioletred;
  border: 1px solid palevioletred;
  transition: ease-in-out 0.2s;

  ${typography}
  ${space}

  &:hover {
    opacity: 0.8;
  }

  /* &:active {
    opacity: 0.3;
  } */

  /* /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      border: none;
      color: white;
    `}
`;

// Figure out variant
// const Button = styled('button')(
//   {
//     appearance: 'none',
//     fontFamily: 'inherit',
//   },
//   variant({
//     variants: {
//       primary: {
//         color: 'white',
//         bg: 'primary',
//       },
//       secondary: {
//         color: 'white',
//         bg: 'secondary',
//       },
//     }
//   })
// )

export default class Button extends Component {
  static propTypes = {
    /** type of Button */
    type: PropTypes.string,
    ...typography.propTypes
  };

  render() {
    return (
      <StyledButton {...this.props} type='button'>
        {this.props.children}
      </StyledButton>
    );
  }
}
