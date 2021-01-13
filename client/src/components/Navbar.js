import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg  ">
      <div>
        <Link className="navbar-brand" to="/">
          Stockify
        </Link>
      </div>

      <div>
        {/* Login/Logout Button */}
        <div className="nav-item navbar-right ">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
