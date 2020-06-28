import React from "react";
import { useHistory } from "react-router-dom";

import { H1, Button, Logout } from "../../components";
import { useCurrentUser } from "../../hooks";

export default function Home() {
	const history = useHistory();
	const user: any = useCurrentUser();

	const goToGameRoom = () => history.push("/r/lol");
	const goToLogin = () => history.push("/login");
	const goToSignup = () => history.push("/signup");
	const goToProfile = () => history.push(`/u/${user!.uid}`);

	return (
		<>
			<H1>home</H1>
			<Button onClick={goToGameRoom}>Go to room</Button>
			{user ? (
				<>
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
