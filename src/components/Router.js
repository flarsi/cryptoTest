import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  import CurrencyInfo from "../pages/CurrencyInfo";
  import HomePage from "../pages/HomePage";
export default function AppRouter() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/currencyInfo/:id" element={<CurrencyInfo/>} />
          </Routes>
        </Router>
    );
}