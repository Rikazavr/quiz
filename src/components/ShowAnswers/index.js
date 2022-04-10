import React from 'react';

const ShowAnswers = ({ setState }) => {
  return (
    <button
      className="show-answers"
      onClick={()=> setState('answers')}
    >
      Ответы
    </button>
  )
};

export default ShowAnswers;
