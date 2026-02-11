import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PlatformPage from './pages/PlatformPage';
import ImpactPage from './pages/ImpactPage';
import ContactPage from './pages/ContactPage';
import GovernmentPage from './pages/GovernmentPage';
import WorldMapDemo from './pages/WorldMapDemo';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/government" element={<GovernmentPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/world-map" element={<WorldMapDemo />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;