import styled from 'styled-components';

type Title = {
  fontSize: string;
  fontFamily: string;
  color?: string;
  textAlign?: string;
};

export const Title = styled.h1<Title>`
  font-size: ${({ fontSize }) => fontSize};
  font-family: ${({ fontFamily }) => fontFamily};
  text-align: ${({ textAlign }) => textAlign ?? 'center'};
  color: ${({ color }) => color ?? 'black'};

  position: relative;
  top: -4vh;
`;
