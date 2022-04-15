import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../../hooks';
import Sound from 'react-sound';
import Timer from '../Timer';
import Audio from '../Audio';
import gif from './images/001.gif';
import './question.css';

const Question = observer(() => {
  const {
    quiz: {
      selectedCategory,
      setState
    }
  } = useStores();

  const type = selectedCategory.type;
  const questions = selectedCategory.questions;
  const [questionId, setId] = useState(0);
  const question = questions[questionId];

  const goToNextQuestion = () => {
    if (questionId === questions.length - 1) {
      setState('finished');
    } else {
      setId(questionId + 1);
    }
  }

  if (type === 'audio') return (
    <AudioQuestion
      id={questionId}
      url={question.url}
      next={goToNextQuestion}
    />
  );

  if (type === 'image') return (
    <ImageQuestion
      id={questionId}
      url={question.url}
      next={goToNextQuestion}
    />
  );
});

const AudioQuestion = ({ id, url, next }) => {
  return (
    <div className="question">
      <p className="question__id">
        {`№ ${id + 1}`}
      </p>
      <div className="question__wrapper">
        <Timer onFinish={next} key={id} time={33000} />
        <Audio url={url} />

        <img
          src={gif}
          alt="gif"
          className="quiz__gif"
        />
      </div>
    </div>
  )
}

const ImageQuestion = ({ id, url, next }) => {
  return (
    <div className="question question--image">
      <div className="question__info">
        <p className="question__id">
          {`№ ${id + 1}`}
        </p>
        <Timer onFinish={next} key={id} time={25000} />
      </div>

      <div className="question__wrapper">
        <img
          src={url}
          alt="image"
          className="question__image"
        />
      </div>

      <Sound
        url="https://docs.google.com/uc?export=open&id=1L_K_pAL3DVK10l5OxFQN2MAENqYWLrAg"
        playStatus={Sound.status.PLAYING}
        volume={30}
      />
    </div>
  )
}

export default Question;
