import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Import background image
import bandBackground from './background.jpg';

// Import components
import Live from './components/Live';
import Music from './components/Music';
import Merch from './components/Merch';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundImage: `url(${bandBackground})`, backgroundSize: 'cover' }}>
        <header className="App-header">
          <h1>MEREKAT</h1>
          <h3>ruining your night with live music since 2021</h3>
          <nav className="AppNav">
            <Link to="/live">Live</Link>
            <Link to="/music">Music</Link>
            <Link to="/merch">Merch</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/live" element={<Live />} />
          <Route path="/music" element={<Music />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
