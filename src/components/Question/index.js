import React, { useState, useEffect } from 'react';
import Audio from '../Audio';
import './question.css';

const Question = ({questions}) => {
  const [questionId, setId] = useState(0);
  const [count, setCount] = useState(30);
  const question = questions[questionId];

  return (
    <div className="question">
      <p className="question__id">
        {`№ ${questionId + 1}`}
      </p>

      <Audio url={question.url} />
    </div>
  )
};

export default Question;
