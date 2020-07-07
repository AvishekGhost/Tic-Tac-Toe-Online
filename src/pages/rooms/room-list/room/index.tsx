import React, { FC } from "react";
import { useHistory } from "react-router-dom";

import { RoomItem } from "../../../../typings";

import { Container, Card } from "./styles";

const Room: FC<RoomItem> = ({ id, owner }) => {
	const history = useHistory();

	function handleClick() {
		history.push(`/r/${id}`);
	}

	return (
		<Container key={id} onClick={handleClick}>
			<Card>
				<p>
					Room ID: <strong>{id}</strong>
				</p>
				<p>
					Owner: <strong>{owner}</strong>
				</p>
			</Card>
		</Container>
	);
};

export default Room;
