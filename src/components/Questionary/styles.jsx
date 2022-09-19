import styled, { css } from 'styled-components';

export const List = styled.ul`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  height: 100%;
  gap: 3vh;
  padding: 5vh 0 15vh 0;
  overflow: auto;
  background-color: #ffffff0a;
`;

export const Option = styled.li`
  font-family: 'Reem Kufi Ink', sans-serif;
  text-align: center;
  display: inline-block;
  font-weight: bolder;
  font-size: 2rem;
  line-height: 2rem;
  color: white;
  cursor: pointer;
  ${({ RightAnswer, WrongAnswerCorrect }) => (RightAnswer || WrongAnswerCorrect) && css`
    width: 100%;
    background-color: limegreen;
  `}
  ${({ WrongAnswerSelected }) => WrongAnswerSelected && css`
    width: 100%;
    background-color: red;
  `}
`;
