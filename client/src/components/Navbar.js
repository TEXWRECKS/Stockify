import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useAuth0 } from '@auth0/auth0-react';

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
        {/* Login Prompt Text */}
        <h5 className="nav-text">
          Sign Up or Log In to save products to your Saved Products list, and to
          set notification preferences!
        </h5>
      </div>
      <div>
        {/* Login/Logout Button */}
        <div className="nav-item ">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
