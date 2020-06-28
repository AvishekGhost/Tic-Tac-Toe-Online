import React from "react";
import { useHistory } from "react-router-dom";

import { H1, Button, Logout } from "../../components";
import { useUser } from "../../hooks";

export default function Home() {
	const history = useHistory();
	const user = useUser();

	const goToGameRoom = () => history.push("/room/lol");
	const goToLogin = () => history.push("/login");
	const goToSignup = () => history.push("/signup");

	return (
		<>
			<H1>home</H1>
			<Button onClick={goToGameRoom}>Go to room</Button>
			{user ? (
				<Logout />
			) : (
				<>
					<Button onClick={goToLogin}>Login</Button>
					<Button onClick={goToSignup}>Register</Button>
				</>
			)}
		</>
	);
}
