import './App.css';
import React from 'react';
import { Footer, Home, View } from "./containers";
import { Menu, Navbar } from "./components";
import { ThemeProvider } from './ThemeContext';


function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

