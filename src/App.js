import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import { StoresProvider } from './providers';
import HomePage from './pages/Home';

function App() {
  return (
    <StoresProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </StoresProvider>
  );
}

export default App;
