import React from 'react';
import { useNavigate } from "react-router-dom";
import { observer } from 'mobx-react';
import { useStores } from '../../hooks';
import './categories.css';

const Categories = observer(() => {
  const {
    quiz: {
      categories,
      selectCategory,
      setState
    }
  } = useStores();

  const navigate = useNavigate();

  const handleClick = category => {
    setState('playing');
    selectCategory(category);
    navigate(`/categories/${category.id}`);
  }

  return (
    <main className="quiz">
      <section className="quiz__wrapper">
        <h1 className="title">
          Categories
        </h1>
        {categories.map((category) =>
          <button
            key={category.id}
            className="select-category"
            onClick={()=> handleClick(category)}
          >
            {category.id}{'\u00A0'}{category.title}
          </button>
        )}
      </section>
    </main>
  )
});

export default Categories;
