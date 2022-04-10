import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../../hooks';
import Question from '../../components/Question';
import Answer from '../../components/Answer';
import ShowAnswers from '../../components/ShowAnswers';
import Back from '../../components/Back';
import './category.css';

const Category = observer(() => {
  const {
    quiz: {
      selectedCategory,
      setState,
      state
    }
  } = useStores();

  return (
    <main className="category">
      <h1 className="title">
        {selectedCategory.title}
      </h1>
      <section className="category__wrapper">
        <RenderState
          state={state}
          setState={setState}
        />
      </section>
    </main>
  )
});

const RenderState = ({ state, setState }) => {
  if (state === 'playing') return <Question />;
  if (state === 'finished') return <ShowAnswers setState={setState} />;
  if (state === 'answers') return <Answer />;
  if (state === 'passed') return <Back />;

  return (
    <button
      onClick={()=> setState('playing')}
      className="start"
    >
      start
    </button>
  )
};

export default Category;
