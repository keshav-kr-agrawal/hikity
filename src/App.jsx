import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TermsAndConditions from './TermsAndConditions';
import WomenPage from './services/WomenPage';
import DentistPage from './services/DentistPage';
import SchoolPage from './services/SchoolPage';
import CafePage from './services/CafePage';
import MusicPage from './services/MusicPage';
import CraftPage from './services/CraftPage';
import WorkPage from './services/WorkPage';
import BusinessPage from './services/BusinessPage';
import BuildPage from './services/BuildPage';
import BuildTnC from './services/BuildTnC';
import LinksPage from './LinksPage';
import BlogPage from './blog/BlogPage';
import BlogPostPage from './blog/BlogPostPage';
import ServicesPage from './services/ServicesPage';

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
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/build" element={<BuildPage />} />
        <Route path="/build/t&c" element={<BuildTnC />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </Router>
  );
}

export default App;