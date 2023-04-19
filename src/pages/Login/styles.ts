import styled from 'styled-components';
import loginSlider from '../../assets/img/projects.jpg';

const borderRadius = '30px';

export const Slider = styled.div`
  background-image: url(${loginSlider});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 60%;
  min-height: 90vh;
  height: auto;
  border-radius: 0 ${borderRadius} ${borderRadius} 0;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const RegisterForm = styled.form`
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0));

  width: 30%;
  min-width: 500px;
  min-height: 90vh;
  height: auto;

  border-radius: ${borderRadius} 0 0 ${borderRadius};

  @media screen and (max-width: 1280px) {
    width: 100%;
    min-height: 100vh;
    border-radius: 0px;
  }

  @media screen and (max-width: 580px) {
    border-radius: 0px;
    width: 100%;
    min-height: 100vh;
    padding: 5vh 0;
  }

  @media screen and (max-height: 700px) {
    padding: 15vh 0;
  }
`;
