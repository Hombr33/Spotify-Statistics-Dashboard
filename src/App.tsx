import './App.css';
import  Navigation  from './Components/Navigation.tsx';
import  Main  from './Components/Main.tsx';
import  Footer  from './Components/Footer.tsx';
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <div className="App">

      <Navigation />
      <Main />
      <Footer />

      <Analytics />

    </div>
  )
}

export default App;
