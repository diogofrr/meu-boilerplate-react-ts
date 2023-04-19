import styled from 'styled-components';

type TList = {
  listStyle?: string;
  alignSelf?: string;
  margin?: string;
};

export const List = styled.ul<TList>`
  font-size: 1.6rem;
  font-family: 'Lato', sans-serif;
  align-self: ${({ alignSelf }) => alignSelf ?? 'center'};
  list-style-position: inside;
  margin-left: 1.6rem;
  margin-bottom: 20px;
`;
