import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import { StoresProvider } from './providers';
import HomePage from './pages/Home';
import Categories from './pages/Categories';
import Category from './pages/Category';

function App() {
  return (
    <StoresProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<Category />} />
        </Routes>
      </Router>
    </StoresProvider>
  );
}

export default App;
