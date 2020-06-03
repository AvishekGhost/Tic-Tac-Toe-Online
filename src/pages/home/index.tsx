import React from 'react'
import { useHistory } from 'react-router-dom';

import { H1, Button } from '../../components';

export default function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/room/lol");
  }
  return (
    <>
      <H1>home</H1>
      <Button onClick={handleClick}>Go to room</Button>
    </>
  )
} 