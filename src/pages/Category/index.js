import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { observer } from 'mobx-react';
import { useStores } from '../../hooks';
import Question from '../../components/Question';
import './category.css';

const Category = observer(() => {
  const {
    quiz: {
      selectedCategory,
      setState,
      state
    }
  } = useStores();

  const questions = selectedCategory.questions;

  return (
    <main className="category">
      <h1 className="title">
        {selectedCategory.title}
      </h1>
      <section className="category__wrapper">
        {state === 'playing' ? (
          <Question questions={questions} />
        ) : (
          <button
            onClick={()=> setState('playing')}
            className="start"
          >
            start
          </button>
        )}
      </section>
    </main>
  )
});

export default Category;
