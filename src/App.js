import * as ReactDOMClient from 'react-dom/client';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';

const container = document.getElementById('root');
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={ <Contact/>}/>
        <Route path="*" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
