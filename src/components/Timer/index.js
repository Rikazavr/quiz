import React, { useState } from 'react';
import Countdown from "react-countdown";

const renderer = ({ seconds, completed }) => {
  if (completed) {
    return <p>a</p>;
  } else {
    return <span>{seconds}</span>;
  }
};

const Timer = ({ onFinish }) => {
  return (
    <Countdown
      date={Date.now() + 5000}
      renderer={renderer}
      autoStart
      onComplete={()=> onFinish()}
    />
  )
};

export default Timer;
