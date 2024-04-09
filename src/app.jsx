import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
      <div className='body'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              ClickInspiration<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='index.html'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='generator.html'>
                  Generator
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='favorites.html'>
                  Favorites
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='about.html'>
                  About
                </a>
              </li>
            </menu>
          </nav>
        </header>
  
        <main>App components go here</main>
  
        <footer className="bg-dark text-white-50">
            <div className="container-fluid">
                <span className="text-reset">Author: Emma Bills</span>
            </div>
            <div className="container-fluid">
                <a className="text-reset" href="https://github.com/PirateQueen890/startup">Source</a>
            </div>
        </footer>
      </div>
    );
  }