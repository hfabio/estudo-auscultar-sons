import styled from 'styled-components';

export const ContainerApp = styled.section`
  width: max(40%, 400px);
  height: 100%;
  margin: 0 auto 0;
`;

export const ContainerAudioControl = styled.section`
  width: max(15vw, 90px);
  position: fixed;
  bottom: max(5vh, 30px);
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
