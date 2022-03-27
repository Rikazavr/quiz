import React, { useState, useEffect } from 'react';
import Timer from '../Timer';
import Audio from '../Audio';
import './question.css';

const Question = ({ questions }) => {
  const [questionId, setId] = useState(0);
  const question = questions[questionId];

  const goToNextQuestion = () => {
    if (questionId === questions.length - 1) {
      console.log('FINISHED');
    } else {
      setId(questionId + 1);
    }
  }

  return (
    <div className="question">
      <Timer onFinish={goToNextQuestion} key={questionId} />
      <p className="question__id">
        {`№ ${questionId + 1}`}
      </p>

      <Audio url={question.url} />
    </div>
  )
};

export default Question;
