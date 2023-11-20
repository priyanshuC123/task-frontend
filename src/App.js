// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/section-one" element={<SectionOne />} />
        <Route path="/section-two" element={<SectionTwo />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
