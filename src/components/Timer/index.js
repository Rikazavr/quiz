import React from 'react';
import Countdown from "react-countdown";
import './timer.css';

const renderer = ({ seconds, completed }) => {
  if (completed) {
    return <p>a</p>;
  } else {
    return (
      <div className="timer">
        {seconds}
      </div>
    );
  }
};

const Timer = ({ onFinish, time }) => {
  return (
    <Countdown
      date={Date.now() + time}
      renderer={renderer}
      autoStart
      onComplete={()=> onFinish()}
    />
  )
};

export default Timer;
