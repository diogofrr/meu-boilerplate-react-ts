import styled from 'styled-components';

type TContainer = {
  width: string;
  height: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  flex?: string;
  overflow?: string;
  backgroundColor?: string;
};

export const Container = styled.div<TContainer>`
  width: ${({ width }) => width};
  min-height: ${({ height }) => height};
  height: auto;

  overflow: ${({ overflow }) => overflow ?? 'hidden'};
  background-color: ${({ backgroundColor }) => backgroundColor ?? '#ebebeb'};

  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
  align-items: ${({ alignItems }) => alignItems ?? 'center'};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
  flex: ${({ flex }) => flex ?? 'auto'};
`;
