import React from 'react'
import { useHistory } from 'react-router-dom';

import { H1, Button } from '../../components';

export default function Home() {
  const history = useHistory();

  const goToGameRoom = () => {
    history.push("/room/lol");
  }

  const goToLogin = () => {
    history.push("/login");
  }

  const goToSignup = () => {
    history.push("/signup");
  }

  return (
    <>
      <H1>home</H1>
      <Button onClick={goToGameRoom}>Go to room</Button>
      <Button onClick={goToLogin}>Login</Button>
      <Button onClick={goToSignup}>Register</Button>
    </>
  );
} 