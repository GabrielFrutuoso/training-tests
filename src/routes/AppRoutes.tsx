import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import ChampionScreen from '../pages/ChampionScreen/ChampionScreen';

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ChampionScreen" element={<ChampionScreen />} />
        </Routes>
    </BrowserRouter>
  );
};

