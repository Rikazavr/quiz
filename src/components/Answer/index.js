import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../../hooks';
import Timer from '../Timer';
import './answer.css';

const Answer = observer(() => {
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
  const embedId = question.videoId;
  const seconds = (type === 'image') ? 7000 : 15000;

  const goToNextQuestion = () => {
    if (questionId === questions.length - 1) {
      setState('passed');
    } else {
      setId(questionId + 1);
    }
  }

  return (
    <div className="answer">
      <div className="answer__info">
        <p className="answer__id">
          {`№ ${questionId + 1}`}
        </p>
        <Timer onFinish={goToNextQuestion} key={questionId} time={seconds} />
      </div>

      <div className="answer__wrapper">
        {type === 'audio' ? (
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        ) : (
          <div>
            <h1 className="answer__text">
              {question.answer}
            </h1>
            <img
              src={question.url}
              alt="image"
              className="answer__image"
            />
          </div>
        )}
      </div>
    </div>
  )
});

export default Answer;
