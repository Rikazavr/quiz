import React from 'react';
import { Link } from "react-router-dom";
import './home-page.css';
import gif from './images/000.gif';

const HomePage = () => {
  return (
    <main className="quiz">
      <section className="quiz__wrapper">
        <h1 className="title quiz__title">
          homooncool anime{'\u00A0'}quiz
        </h1>
        <Link to="/categories" className="button quiz__start">
          start
        </Link>
      </section>

      <img
        src={gif}
        alt="gif"
        className="quiz__gif"
      />
    </main>
  )
};

export default HomePage;
