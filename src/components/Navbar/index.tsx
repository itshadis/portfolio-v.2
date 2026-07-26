'use client';

import { useState, useEffect } from 'react';
import './index.scss';

function Navbar() {
  const [isShow, setIsShow] = useState<boolean>(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isShow]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isShow) {
        setIsShow(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isShow]);

  const navItems = [
    { label: 'Home', target: '#hero' },
    { label: 'About', target: '#about' },
    { label: 'Experience', target: '#experience' },
    { label: 'Projects', target: '#projects' },
    { label: 'Contact', target: '#contact' },
  ];

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <h1>Software Developer</h1>
      <button
        type="button"
        onClick={() => setIsShow(!isShow)}
        className={`hamburger-btn ${isShow ? 'open' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isShow}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`navlist ${isShow ? 'show' : ''}`}>
        {navItems.map((item, i) => (
          <li onClick={() => setIsShow(false)} key={i}>
            <a href={item.target}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
