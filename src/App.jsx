import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TermsAndConditions from './TermsAndConditions';
import WomenPage from './WomenPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/t&c" element={<TermsAndConditions />} />
        <Route path="/women" element={<WomenPage />} />
      </Routes>
    </Router>
  );
}

export default App;