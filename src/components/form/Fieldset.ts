import styled from 'styled-components';

type TFieldset = {
  width: string;
  height: string;
  mqHeight?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  flex?: string;
  overflow?: string;
};

export const Fieldset = styled.fieldset<TFieldset>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  overflow: ${({ overflow }) => overflow ?? 'hidden'};
  border: none;

  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
  align-items: ${({ alignItems }) => alignItems ?? 'center'};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};

  @media screen and (max-width: 568px) {
    height: ${({ mqHeight, height }) => mqHeight ?? height};
  }
`;
