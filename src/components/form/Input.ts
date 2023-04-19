import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  border: none;
  outline: none;

  border-bottom: 2px solid #ccc;
  font-size: 1.6rem;

  color: gray;

  font-family: Lato, sans-serif;

  &:focus {
    border-color: black;
    color: black;
  }

  &::placeholder {
    font-family: Lato, sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  &:valid {
    border-color: black;
    color: black;
  }
`;
