import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Referral from './page/referral';

function App() {

  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/referral" element={<Referral />} />
</Routes>

    </div>
  );
}

export default App;
