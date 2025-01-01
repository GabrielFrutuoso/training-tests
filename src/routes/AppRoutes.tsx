import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { ChampionScreen } from "../pages/ChampionScreen/ChampionScreen";


export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ChampionScreen" element={<ChampionScreen />} />
    </Routes>
  );
};
