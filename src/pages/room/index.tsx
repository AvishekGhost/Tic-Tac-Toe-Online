import React from "react";
import { useHistory } from "react-router-dom";

import { H1, Button } from "../../components";
import { Block, Container, Row, Grid } from "./styles";
import { useClearBoard, useMarkBoard, useRoom } from "../../hooks";

const Room: React.FC = () => {
	const history = useHistory();

	const { clearBoard, isClearing } = useClearBoard();
	const { isFetching, room } = useRoom();
	const { isMarking, markBoard } = useMarkBoard();

	if (isFetching) return <H1>Loading Room...</H1>;
	if (!room) return <H1>Room Not found</H1>;

	const { board, isGameDone, message, startingTurn } = room;

	const handleClick = async (index: number) => {
		if (!isMarking && !board[index] && !isGameDone) {
			await markBoard(index, room!);
		}
	};

	const handleClear = async () => {
		await clearBoard(startingTurn);
	};

	const goToHome = () => history.push("/");

	return (
		<Container>
			<H1>{message}</H1>
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
