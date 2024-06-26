import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Generator } from './generator/generator';
import { Favorites } from './favorites/favorites';
import { Share } from './share/share';
import { About } from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
    const [username, setUsername] = React.useState(localStorage.getItem('username') || '');
    const currentAuthState = username ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>
            <div className='body bg-white text-dark'>
                <header className='container-fluid'>
                    <nav className='navbar fixed-top navbar-dark'>
                        <div className='navbar-brand'>
                        ClickInspiration<sup>&reg;</sup>
                        </div>
                        <menu className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to="">
                            Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='generator'>
                            Generate
                            </NavLink>
                        </li>
                        {authState === AuthState.Authenticated && (
                            <li className='nav-item'>
                            <NavLink className='nav-link' to='favorites'>
                            Favorites
                            </NavLink>
                        </li>
                        )}
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='about'>
                            About
                            </NavLink>
                        </li>
                        </menu>
                    </nav>
                </header>
                
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Login
                                username={username}
                                authState={authState}
                                onAuthChange={(username, authState) => {
                                setAuthState(authState);
                                setUsername(username);
                                }}
                            />
                        }
                        exact
                    />
                    <Route path='/generator' element={<Generator />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path="/share" element={<Share />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
        
                <footer className="bg-dark text-white-50">
                    <div className="container-fluid">
                        <span className="text-reset">Author: Emma Bills</span>
                    </div>
                    <div className="container-fluid">
                        <a className="text-reset" href="https://github.com/PirateQueen890/startup">Source</a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
  }

  function NotFound() {
    return <main className='container-fluid bg-white text-center'>404: Return to sender. Address unknown.</main>;
  }

  export default App;