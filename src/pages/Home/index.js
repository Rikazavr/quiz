import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../../hooks';

const HomePage = observer(() => {
  const {
    quiz: { data }
  } = useStores();

  return (
    <main>
      <p>{data}</p>
    </main>
  )
});

export default HomePage;
