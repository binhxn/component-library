import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { typography } from 'styled-system';

const StyledButton = styled.button`
  font-size: 12px;
  cursor: pointer;
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  transition: ease-in-out 0.2s;

  ${typography}

  &:hover {
    opacity: .8;
  }

  &:active {
    opacity: .3;
  }

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props =>
    props.primary &&
    css`
      background: white;
      color: palevioletred;
    `}

  padding: ${props => props.gutter}px;
`;

StyledButton.propTypes = {
  ...typography.propTypes
};

export default class Button extends Component {
  render() {
    return (
      <StyledButton primary gutter={10} type='button' fontSize={20}>
        Hello
      </StyledButton>
    );
  }
}
