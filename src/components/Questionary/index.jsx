import { List, Option } from './styles';

export const Questionary = ({
  Options,
  RightAnswer,
  HandleAnswer,
  SelectedAnswer,
  BlockAnswer,
}) => {
  const handleAnswer = (item) => {
    if (BlockAnswer) return;
    HandleAnswer(item);
  };

  return (
    <List>
      {Options?.map((option) => (
        <Option
          onClick={() => handleAnswer(option)}
          key={option}
          RightAnswer={(option === RightAnswer && option === SelectedAnswer)}
          WrongAnswerCorrect={(option === RightAnswer && (SelectedAnswer !== '' && option !== SelectedAnswer))}
          WrongAnswerSelected={(option !== RightAnswer && option === SelectedAnswer)}
        >
          {option}
        </Option>
      ))}
    </List>
  );
};

export default Questionary;
