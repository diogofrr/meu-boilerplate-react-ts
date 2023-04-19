import styled from 'styled-components';

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;

  margin-bottom: 20px;

  @media screen and (max-width: 1280px) {
    width: 60vw;
  }

  @media screen and (max-width: 568px) {
    width: 80vw;
  }
`;
