import React from "react";
import { useHistory } from "react-router-dom";

import { H1, Button, Logout } from "../../components";
import { useCurrentUser, useCreateRoom } from "../../hooks";

export default function Home() {
	const history = useHistory();
	const user: any = useCurrentUser();
	const { createRoom, isCreatingRoom } = useCreateRoom();

	const goToJoinRoom = () => history.push("/r");
	const goToLogin = () => history.push("/login");
	const goToSignup = () => history.push("/signup");
	const goToProfile = () => history.push(`/u/${user!.id}`);

	const handleCreateRoom = async () => {
		const roomId = await createRoom();
		history.push(`/r/${roomId}`);
	};

	return (
		<>
			<H1>Home Page</H1>
			<Button onClick={goToJoinRoom}>Join Room</Button>
			{user ? (
				<>
					<Button disabled={isCreatingRoom} onClick={handleCreateRoom}>
						Creat{isCreatingRoom ? "ing " : "e"} Room
					</Button>
					{/*  */}
					<Button onClick={goToProfile}>Go To Your Profile</Button>
					<Logout />
				</>
			) : (
				<>
					<Button onClick={goToLogin}>Login</Button>
					<Button onClick={goToSignup}>Register</Button>
				</>
			)}
		</>
	);
}
