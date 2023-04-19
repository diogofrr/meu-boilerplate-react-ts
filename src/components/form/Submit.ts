import styled from 'styled-components';

export const Submit = styled.button`
  width: 40rem;
  padding: 15px;

  font-family: Lato, sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: white;
  cursor: pointer;
  text-align: center;
  transition: 0.2s;

  background-color: black;
  border: 2px black solid;
  outline: none;

  &:hover {
    background-color: white;
    color: black;
  }

  @media screen and (max-width: 1280px) {
    width: 60vw;
  }
`;
