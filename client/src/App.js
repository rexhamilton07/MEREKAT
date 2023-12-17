import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import factor from './factor.png'
import instaIcon from './insta.png';
import spotify from './spotify.png'
import apple from './apple.png'
import Live from './components/Live';
import Music from './components/Music';
import Merch from './components/Merch';
import About from './components/About';
import Gallery from './components/Gallery';

function Header() {
  return (
    <header className="App-header">
      <Link to="/" className="App-title">
        <h1>MEREKAT</h1>
      </Link>
      <h3>ruining your night with live music since 2021</h3>
      <nav className="App-nav">
        <Link to="/about">About</Link>
        <Link to="/music">Music</Link>
        <Link to="/live">Live</Link>
        {/* <Link to="/merch">Merch</Link> */}
        <Link to="/gallery">Gallery</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="AppFooter">
      <ul>
        <li>
          <a href="https://www.instagram.com/merekat.tv/" target="_blank" rel="noopener noreferrer">
            <img className='factorphoto' src={instaIcon} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/artist/3JoWxHEY7RGWFGLIgrFA7K?si=f7RK1GDMQs2jep_CBoddSg" target="_blank" rel="noopener noreferrer">
            <img className='factorphoto' src={spotify} alt="spotify" />
          </a>
        </li>
        <li>
          <a href="https://music.apple.com/us/artist/merekat/1697401553" target="_blank" rel="noopener noreferrer">
            <img className='factorphoto' src={apple} alt="apple music" />
          </a>
        </li>
        <li>
          <a href="https://factor.ca" target="_blank" rel="noopener noreferrer">
            <img className='factorphoto' src={factor} alt="factor canada" />
          </a>
        </li>
      </ul>
      <p>&#169; MEREKAT 2023</p>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="ContentWrapper">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/music" element={<Music />} />
            <Route path="/live" element={<Live />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
