import { useState } from "react";
import logo from '../assets/logo-no_bg.png';
import githubIcon from '../assets/github.svg';
import linkedin from '../assets/linkedin2.svg';
import '../styles/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className='mainNavBar'>
      {/* Left: Logo */}
      <div className='nav-left'>
        <a href="/">
          <img className='BigNavPic' src={logo} alt="NavPicture" />
        </a>
      </div>

      {/* Middle: Nav links */}
      <div className={`nav-center ${menuOpen ? 'open' : ''}`}>
        <a href="/" onClick={() => setMenuOpen(false)} className='navlink'>Home</a>
        <a href="#about-me-section" onClick={() => setMenuOpen(false)} className='navlink'>About Me</a>
        <a href="#projects-section" onClick={() => setMenuOpen(false)} className='navlink'>Projects</a>
      </div>

      {/* Right: Social Icons */}
      <div className="nav-right">
        <a href="https://github.com/Brandonkhumalo" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://linkedin.com/in/brandon-khumalo04" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="social-icon" />
        </a>
      </div>

      {/* Hamburger menu button */}
      <button
        className={`menuToggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
}

export default Navbar;
