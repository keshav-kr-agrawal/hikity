import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TermsAndConditions from './TermsAndConditions';
import WomenPage from './WomenPage';
import DentistPage from './DentistPage';
import SchoolPage from './SchoolPage';
import CafePage from './CafePage';
import MusicPage from './MusicPage';
import CraftPage from './CraftPage';
import WorkPage from './WorkPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/t&c" element={<TermsAndConditions />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/dentist" element={<DentistPage />} />
        <Route path="/school" element={<SchoolPage />} />
        <Route path="/cafe" element={<CafePage />} />
        <Route path="/art/music" element={<MusicPage />} />
        <Route path="/art/craft" element={<CraftPage />} />
        <Route path="/work" element={<WorkPage />} />
      </Routes>
    </Router>
  );
}

export default App;