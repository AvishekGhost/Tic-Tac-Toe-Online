import React, { useState } from 'react';

import { Block, Container, Row, Button } from '../../styles';
import { checkBoard } from '../../helpers';
import { useParams } from 'react-router';

export type SYMBOL = 'x' | 'o';
export type BLOCK = SYMBOL | '-';

function Room() {
  const { id } = useParams();
  const [board, setBoard] = useState<BLOCK[]>([
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
  ]);

  const [startingTurn, setStartingTurn] = useState<SYMBOL>('x');
  const [isXTurn, setIsXTurn] = useState<boolean>(startingTurn === 'x');
  const [turnNumber, setTurnNumber] = useState<number>(1);
  const [message, setMessage] = useState<string>(`${startingTurn.toUpperCase()}'s turn`);
  const [gameDone, setGameDone] = useState<boolean>(false);

  const handleClick = (index: number) => {
    if (board[index] === '-' && !gameDone) {
      const newBoard = [...board];
      newBoard[index] = isXTurn ? 'x' : 'o';

      // check game state
      const outCome = checkBoard({ newBoard, isXTurn, turnNumber });

      switch (outCome) {
        case "XWIN":
          setMessage("X WINS!");
          setGameDone(true);
          break;
        case "OWIN":
          setMessage("O WINS!");
          setGameDone(true);
          break;
        case "DRAW":
          setMessage("DRAWS!");
          setGameDone(true);
          break;

        default:
          setMessage(`Player ${isXTurn ? 'O' : 'X'}'s turn`)
      }

      setTurnNumber(turnNumber + 1);
      setIsXTurn(!isXTurn);
      setBoard(newBoard);
    }
  }


  const handleClear = () => {
    setStartingTurn(startingTurn === 'x' ? 'o' : 'x')
    setIsXTurn(startingTurn === 'x');
    setTurnNumber(1);
    setMessage(`${startingTurn.toUpperCase()}'s turn`);
    setGameDone(false);
    setBoard([
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
    ]);
  }

  return (
    <Container>
      <h1>{id}</h1>
      <h3>{message}</h3>
      <Row>
        <Block onClick={() => handleClick(0)}>{board[0] !== '-' && board[0]}</Block>
        <Block onClick={() => handleClick(1)}>{board[1] !== '-' && board[1]}</Block>
        <Block onClick={() => handleClick(2)}>{board[2] !== '-' && board[2]}</Block>
      </Row>
      <Row>
        <Block onClick={() => handleClick(3)}>{board[3] !== '-' && board[3]}</Block>
        <Block onClick={() => handleClick(4)}>{board[4] !== '-' && board[4]}</Block>
        <Block onClick={() => handleClick(5)}>{board[5] !== '-' && board[5]}</Block>
      </Row>
      <Row>
        <Block onClick={() => handleClick(6)}>{board[6] !== '-' && board[6]}</Block>
        <Block onClick={() => handleClick(7)}>{board[7] !== '-' && board[7]}</Block>
        <Block onClick={() => handleClick(8)}>{board[8] !== '-' && board[8]}</Block>
      </Row>
      <Button onClick={handleClear}>Clear Board</Button>
    </Container>
  );
}

export default Room;
