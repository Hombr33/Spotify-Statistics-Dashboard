import './App.css';
import Navigation from './Components/Navigation.tsx';
import Main from './Components/Main.tsx';
import FrontPage from './Components/Frontpage.tsx';
import ErrorPage from './Components/Errorpage.tsx';
import Footer from './Components/Footer.tsx';

import Callback from './Components/Callback.tsx';
import { Analytics } from "@vercel/analytics/react";
import { MantineProvider } from '@mantine/core';

import { useState, useEffect } from 'react';

import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './Components/Signup.tsx'
import Login from './Components/Login.tsx'

function App() {

  const [isLightOn, setLightOn] = useState(() => {

    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === 'light' : false;

  });

  const handleThemeButton: React.MouseEventHandler<HTMLButtonElement> = () => {
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

  const clientId = '9d3a726e6a8c4914b4646fa6d9d71e04';
  const redirectUri = 'https://reddit-statistics-app.vercel.app/callback'


  return (
    <MantineProvider data-mantine-color-scheme={isLightOn ? 'dark' : 'light'}>
      <div className="App">
        <Router>
          <Navigation handleThemeButton={handleThemeButton} isLightOn={isLightOn} />
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/login" element={<Login clientId={clientId} redirectUri={redirectUri}/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Main />} />
            <Route path="/callback" element={<Callback clientId={clientId} redirectUri={redirectUri} />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <Footer />
          <Analytics />
        </Router>
      </div>
    </MantineProvider>
  )
}

export default App;
