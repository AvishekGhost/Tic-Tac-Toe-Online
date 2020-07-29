import React from "react";
import { useHistory } from "react-router-dom";

import { Button, H1, Container } from "../../components";
import { useClearBoard, useRoom } from "../../hooks";

import Board from "./board";
import PlayerDisplay from "./player-display";

const Room = () => {
	const { clearBoard, isClearing } = useClearBoard();
	const history = useHistory();
	const { isFetching, room } = useRoom();

	if (isFetching) {
		return (
			<Container>
				<H1>Loading Room...</H1>
			</Container>
		);
	}

	if (!room) {
		return (
			<Container>
				<H1>Room Not Found</H1>
			</Container>
		);
	}

	const { message, startingTurn } = room;

	async function handleClear() {
		await clearBoard(startingTurn);
	}

	function goBack() {
		history.push("/");
	}

	return (
		<Container>
			<H1>{message}</H1>
			<Board />
			<PlayerDisplay player="X" />
			<PlayerDisplay player="O" />
			<Button disabled={isClearing} onClick={handleClear}>
				Clear{isClearing ? "ing" : ""} Board
			</Button>
			<Button onClick={goBack}>Back To Home</Button>
		</Container>
	);
};

export default Room;
