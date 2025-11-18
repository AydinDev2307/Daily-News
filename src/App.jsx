import React from 'react';
import Header from './components/Header';
import Home from './layout/Home';
import Favorites from './layout/Favorites';
import { Routes, Route } from 'react-router-dom';
import Detail from './layout/Detail';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[rgb(2,8,12)]">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
