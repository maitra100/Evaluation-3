import React from 'react';
import './App.css';
import Home from './public/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Event from './public/Event';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
