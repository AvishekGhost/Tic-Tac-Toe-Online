import React from 'react';

import { Block, Container, Row, Grid } from './styles';

import { useClearBoard, useMarkBoard, useRoom } from '../../hooks';

import { H1, Button } from '../../components'

const Room: React.FC = () => {
  const { clearBoard, isClearing } = useClearBoard();
  const { isFetching, room } = useRoom();
  const { isMarking, markBoard } = useMarkBoard();

  if (isFetching) return <H1>Loading Room...</H1>
  if (!room) return <h1>Room Not found...</h1>

  const { board, isGameDone, message, startingTurn } = room;

  const handleClick = (index: number) => {
    if (!isMarking && !board[index] && !isGameDone)
      markBoard(index, room!);
  }

  const handleClear = () => {
    clearBoard(startingTurn);
  }

  return (
    <Container>
      <h3>{message}</h3>
      <Grid marking={isMarking}>
        <Row>
          <Block onClick={() => handleClick(0)}>{board[0]}</Block>
          <Block onClick={() => handleClick(1)}>{board[1]}</Block>
          <Block onClick={() => handleClick(2)}>{board[2]}</Block>
        </Row>
        <Row>
          <Block onClick={() => handleClick(3)}>{board[3]}</Block>
          <Block onClick={() => handleClick(4)}>{board[4]}</Block>
          <Block onClick={() => handleClick(5)}>{board[5]}</Block>
        </Row>
        <Row>
          <Block onClick={() => handleClick(6)}>{board[6]}</Block>
          <Block onClick={() => handleClick(7)}>{board[7]}</Block>
          <Block onClick={() => handleClick(8)}>{board[8]}</Block>
        </Row>
      </Grid>

      <Button disabled={isClearing} onClick={handleClear}>Clear{isClearing ? 'ing' : ''} Board</Button>

    </Container>
  );
}

export default Room;
