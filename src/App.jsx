import { useState, useRef } from 'react';
import gabarito from './assets/gabarito.json';
import Questionary from './components/Questionary';
import ButtonMedia from './components/ButtonMedia';
import { ContainerApp, ContainerAudioControl } from './styles';

import AudioErrou from './assets/faustao-errou.mp3';
import AudioAcertou from './assets/silvio-santos-certa-resposta.mp3';

import imgPlay from './assets/play.png';
import imgPause from './assets/pause.png';

const App = () => {
  const getRandomPosition = () => Math.round(Math.random() * (gabarito.length - 0) + 0);
  const [respostaCorreta, setRespostaCorreta] = useState(gabarito[getRandomPosition()]);
  const [respostaSelecionada, setRespostaSelecionada] = useState('');
  const [blockAnswer, setBlockAnswer] = useState(false);
  const audioRef = useRef(null);
  const audioErrouRef = useRef(null);
  const AudioAcertouRef = useRef(null);

  const handleAnswer = async (itemClicado) => {
    setRespostaSelecionada(itemClicado);
    setBlockAnswer(true);
    if (itemClicado === respostaCorreta.nome) AudioAcertouRef.current.play();
    if (itemClicado !== respostaCorreta.nome) audioErrouRef.current.play();
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setRespostaCorreta(gabarito[getRandomPosition()]);
    setRespostaSelecionada('');
    setBlockAnswer(false);
  };
  if (!respostaCorreta) return <h1>carregando...</h1>;
  return (
    <ContainerApp>
      <ContainerAudioControl>
        <ButtonMedia Src={imgPlay} OnClick={() => audioRef.current.play()} Alt="botão de play" />
        <ButtonMedia Src={imgPause} OnClick={() => audioRef.current.pause()} Alt="botão de pause" />
      </ContainerAudioControl>

      <audio ref={audioRef} src={`audios/${respostaCorreta?.path}`} hidden />
      <audio ref={audioErrouRef} src={AudioErrou} hidden />
      <audio ref={AudioAcertouRef} src={AudioAcertou} hidden />

      <Questionary
        Options={gabarito.map(({ nome }) => nome)}
        RightAnswer={respostaCorreta?.nome}
        HandleAnswer={handleAnswer}
        SelectedAnswer={respostaSelecionada}
        BlockAnswer={blockAnswer}
      />
    </ContainerApp>
  );
};

export default App;
