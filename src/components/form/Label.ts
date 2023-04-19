import styled from 'styled-components';

export type TLabel = {
  fontSize: string;
};

export const Label = styled.label<TLabel>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  color: gray;

  font-family: Lato, sans-serif;

  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: start;

  width: 100%;
`;
