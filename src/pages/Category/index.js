import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { observer } from 'mobx-react';
import { useStores } from '../../hooks';
import './category.css';

const Category = observer(() => {
  const {
    quiz: { categories }
  } = useStores();

  return (
    <section className="">
      <h1 className="title">
        Category
      </h1>
    </section>
  )
});

export default Category;
