import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import logo from './imgs/logo.png';
import menu from './imgs/menu.png';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <Router>
      <div className="App">
        <nav>
          <img className='logo' src={logo} alt="Logo"></img>
          <ul className='nav-items'>
            <Link className='nav-item' to='/yardland/' onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link className='nav-item' to='/yardland/about' onClick={() => setIsMenuOpen(false)}>Our Story</Link>
            <Link className='nav-item' to='/yardland/services' onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link className='nav-item' to='/yardland/contact' onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </ul>
          <img className='menu-icon' src={menu} alt="Menu Icon" onClick={handleClick}></img>
        </nav>
        {isMenuOpen && (
          <div className="modal">
            <ul className="modal-items">
              <li><Link to='/yardland/' onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to='/yardland/about' onClick={() => setIsMenuOpen(false)}>Our Story</Link></li>
              <li><Link to='/yardland/services' onClick={() => setIsMenuOpen(false)}>Services</Link></li>
              <li><Link to='/yardland/contact' onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
        <main>
          <Routes>
            <Route path="/yardland/" element={<Home />} />
            <Route path="/yardland/about" element={<About />} />
            <Route path="/yardland/services" element={<Services />} />
            <Route path="/yardland/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          {/* Footer content */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
