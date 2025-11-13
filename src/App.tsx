import './App.css';
import Navigation from './Components/Navigation.tsx';
import Main from './Components/Main.tsx';
import Footer from './Components/Footer.tsx';
import { Analytics } from "@vercel/analytics/react";
import { MantineProvider } from '@mantine/core';

import { useState, useEffect } from 'react';

import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './Components/Signup.tsx'
import Login from './Components/Login.tsx'

function App() {

  // no localstorage  for setLightOn yet. fix that
  // carry on tweaking CSS THEN
  // move onto getting real API data displayed.

  const [isLightOn, setLightOn] = useState(() => {

    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === 'light' : false;

  });

  const handleThemeButton: React.MouseEventHandler<HTMLInputElement> = () => {
    setLightOn(prev => !prev);

  };

  useEffect(() => {
    const theme = isLightOn ? "light" : "dark";

    document.documentElement.setAttribute(
      "data-mantine-color-scheme", theme,
    );

    localStorage.setItem("theme", theme);
    console.log(theme);

  }), ([isLightOn, setLightOn]);

  return (

    <MantineProvider>
      <div className="App" data-mantine-color-scheme={isLightOn ? 'light' : 'dark'}>
        <Router>
          <Navigation handleThemeButton={handleThemeButton} isLightOn={isLightOn} />
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Dashboard" element={<Main />} />
          </Routes>
          <Footer />
          <Analytics />
        </Router>
      </div>
    </MantineProvider>
  )
}

export default App;
