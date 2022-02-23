import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { observer } from 'mobx-react';
import { useStores } from '../../hooks';

const Categories = observer(() => {
  const {
    quiz: { categories }
  } = useStores();

  return (
    <main className="quiz">
      <section className="quiz__wrapper">
        <h1 className="title">
          Categories
        </h1>
        {categories.map((category) =>
          <Link to={`/categories/${category.id}`} className="link">
            {category.title}
          </Link>
        )}
      </section>
    </main>
  )
});

export default Categories;
