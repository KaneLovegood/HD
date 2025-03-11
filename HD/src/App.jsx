import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BirthdayPage from './BirthdayPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BirthdayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
