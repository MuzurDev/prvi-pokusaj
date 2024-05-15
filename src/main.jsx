import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App.jsx';
import { Gallery, View, Reserve } from './containers/index.js';
import { Menu } from './components/index.js';

import { ThemeProvider } from './ThemeContext';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <ThemeProvider>
    <Routes>
  <Route path="/" element={<App />} />
  <Route path="/home" element={<App />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/view" element={<View />} />
  <Route path="/reserve" element={<Reserve/>} />
</Routes>
</ThemeProvider>
    </Router>
  </React.StrictMode>
);
