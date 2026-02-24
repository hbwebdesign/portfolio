import React from 'react'
import { useState, useEffect } from 'react';
import logo from "../images/hb-logo.png"

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="https://hemantbram.netlify.app/"><img src={logo} alt="hb-logo"  /></a>
        {/* <a className="navbar-brand" href="https://hemantbram.netlify.app/">HB Por</a> */}
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
          {/* <span className="navbar-toggler-icon"></span> */}
          <i class="fa-solid fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#hero">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#portfolio">Projects</a></li>
          </ul>
        </div>
      </div>
    </nav>
  
    </div>
  )
}
