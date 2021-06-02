import React from 'react';
import styled from 'styled-components';

/* Styling using Styled Componnets */

const Button_ = styled.button`
  background: #2acfcf;
  width: 110px;
  color: #ffff;
  font-size: 12px;
  font-family: 'Poppins';
  font-weight : 700;
  padding: 0.25em 1em;
  border: none;
  border-radius: 12px;
  padding: 0.3em 1rem;
  &:hover {
    cursor:pointer;
    }
`;

function Button(props) {
  return <Button_>{props.text}</Button_>
}

export default Button;
