import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return <Button className="btn-loginout" onClick={() => loginWithPopup()}>Log In</Button>;
};

export default LoginButton;
