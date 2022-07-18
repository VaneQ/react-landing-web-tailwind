import React from 'react'
import Analytics from './components/Analytics';
import { Footer } from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import { PriceCards } from './components/PriceCards';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Analytics/>
      <NewsLetter/>
      <PriceCards/>
      <Footer/>
    </div>
  );
}

export default App;
