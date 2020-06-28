import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Block, Container, Row, Grid } from "./styles";

import {
	useClearBoard,
	useMarkBoard,
	useRoom,
	useCountdown,
} from "../../hooks";

import { H1, Button } from "../../components";

const Room: React.FC = () => {
	const history = useHistory();
	const { counter, setCounter } = useCountdown(10);
	const { clearBoard, isClearing } = useClearBoard();
	const { isFetching, room } = useRoom();
	const { isMarking, markBoard } = useMarkBoard();

	useEffect(() => {
		if (counter === 0) {
			alert("noob");
		}
	}, [counter]);

	if (isFetching) return <H1>Loading Room...</H1>;
	if (!room) return <H1>Room Not found</H1>;

	const { board, isGameDone, message, startingTurn } = room;

	const handleClick = async (index: number) => {
		if (!isMarking && !board[index] && !isGameDone) {
			await markBoard(index, room!);
			setCounter(10);
		}
	};

	const handleClear = async () => {
		await clearBoard(startingTurn);
		setCounter(10);
	};

	const goToHome = () => history.push("/");

	return (
		<Container>
			<H1>Timer: {counter} seconds</H1>
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
			<Button disabled={isClearing} onClick={handleClear}>
				Clear{isClearing ? "ing" : ""} Board
			</Button>
			<Button onClick={goToHome}>Back To Home</Button>
		</Container>
	);
};

export default Room;
