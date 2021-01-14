import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return <button onClick={() => loginWithPopup()}>Log In</button>;
};

export default LoginButton;
