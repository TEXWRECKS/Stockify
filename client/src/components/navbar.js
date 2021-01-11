import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useAuth0 } from '@auth0/auth0-react';

import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  
  const {isAuthenticated} = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg  ">
      <Link className="navbar-brand" to="/">
        Stockify
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === '/' ||
                window.location.pathname === '/home'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            {isAuthenticated ?
            <LogoutButton />
            :
            <LoginButton />
            }
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
