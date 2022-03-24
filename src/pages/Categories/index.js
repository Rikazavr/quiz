import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { observer } from 'mobx-react';
import { useStores } from '../../hooks';
import './categories.css';

const Categories = observer(() => {
  const {
    quiz: {
      categories,
      selectCategory
    }
  } = useStores();

  const navigate = useNavigate();

  const handleClick = category => {
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
            {category.title}
          </button>
        )}
      </section>
    </main>
  )
});

export default Categories;
