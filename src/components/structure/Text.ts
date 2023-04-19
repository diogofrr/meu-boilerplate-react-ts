import styled from 'styled-components';

type TText = {
  alignSelf?: string;
  textAlign?: string;
  padding?: string;
};

export const Text = styled.p<TText>`
  font-size: 1.6rem;
  font-family: 'Lato', sans-serif;

  align-self: ${({ alignSelf }) => alignSelf};
  text-align: ${({ textAlign }) => textAlign};
  padding: ${({ padding }) => padding};
`;
