import React from 'react';
import { Link } from "react-router-dom";
import gif from './images/001.gif';

const Back = () => {
  return (
    <div>
      <Link to="/categories" className="select-category">
        ... следующая категория
      </Link>

      <img
        src={gif}
        alt="gif"
        className="quiz__gif"
      />
    </div>
  )
};

export default Back;
