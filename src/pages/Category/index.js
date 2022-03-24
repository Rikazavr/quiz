import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { observer } from 'mobx-react';
import { useStores } from '../../hooks';
import Question from '../../components/Question';
import './category.css';

const Category = observer(() => {
  const {quiz: { selectedCategory }} = useStores();
  const questions = selectedCategory.questions;

  return (
    <main className="category">
      <section className="category__wrapper">
        <h1 className="title">
          {selectedCategory.title}
        </h1>

        <Question questions={questions} />
      </section>
    </main>
  )
});

export default Category;
