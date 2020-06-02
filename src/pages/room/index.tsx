import React from 'react';
import { useParams } from 'react-router';

import { Block, Container, Row, Button } from '../../styles';

import { useMarkBoard, useRoom } from '../../hooks';


function Room() {
  const { id } = useParams();
  const { isFetching, room } = useRoom(id);
  const { isMarking, markBoard } = useMarkBoard(id);

  if (isFetching) return <h1>Loading Room...</h1>
  if (!room) return <h1>Room Not found...</h1>

  const { board, isGameDone, message } = room;

  const handleClick = (index: number) => {
    if (!isMarking && !board[index] && !isGameDone)
      markBoard(index, room!);
  }


  const handleClear = () => {
    // setStartingTurn(startingTurn === 'x' ? 'o' : 'x')
    // setIsXTurn(startingTurn === 'x');
    // setTurnNumber(1);
    // setMessage(`${startingTurn.toUpperCase()}'s turn`);
    // setGameDone(false);
    // setBoard([
    //   '-',
    //   '-',
    //   '-',
    //   '-',
    //   '-',
    //   '-',
    //   '-',
    //   '-',
    //   '-',
    // ]);
  }

  return (
    <Container>
      <h3>{message}</h3>
      <Row>
        <Block onClick={() => handleClick(0)}>{isMarking ? '-' : board[0]}</Block>
        <Block onClick={() => handleClick(1)}>{isMarking ? '-' : board[1]}</Block>
        <Block onClick={() => handleClick(2)}>{isMarking ? '-' : board[2]}</Block>
      </Row>
      <Row>
        <Block onClick={() => handleClick(3)}>{isMarking ? '-' : board[3]}</Block>
        <Block onClick={() => handleClick(4)}>{isMarking ? '-' : board[4]}</Block>
        <Block onClick={() => handleClick(5)}>{isMarking ? '-' : board[5]}</Block>
      </Row>
      <Row>
        <Block onClick={() => handleClick(6)}>{isMarking ? '-' : board[6]}</Block>
        <Block onClick={() => handleClick(7)}>{isMarking ? '-' : board[7]}</Block>
        <Block onClick={() => handleClick(8)}>{isMarking ? '-' : board[8]}</Block>
      </Row>
      <Button onClick={handleClear}>Clear Board</Button>
    </Container>
  );
}

export default Room;
