import './App.css';
import Navigation from './Components/Navigation.tsx';
import Main from './Components/Main.tsx';
import Footer from './Components/Footer.tsx';
import { Analytics } from '@vercel/analytics/react';
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';

function App() {

  return (
    <MantineProvider>
      <div className="App">

        <Navigation />
        <Main />
        <Footer />
        <Analytics />

      </div>
    </MantineProvider>
  )
}

export default App;
