import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/room/lol");
  }
  return (
    <>
      <h1>home</h1>
      <button onClick={handleClick}>Go to room</button>
    </>
  )
} 