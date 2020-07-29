import React, { FC } from "react";
import { useHistory } from "react-router-dom";

import { H1, Button, Container } from "../../components";
import RoomList from "./room-list";

const RoomsPage: FC = () => {
	const history = useHistory();

	function handleClick() {
		history.push("/");
	}

	return (
		<Container>
			<H1>Rooms</H1>
			<RoomList />
			<Button onClick={handleClick}>Back To Home</Button>
		</Container>
	);
};

export default RoomsPage;
