import React, { FC } from "react";
import { useParams, useHistory } from "react-router-dom";

import { H1, Button, Container } from "../../components";
import { useUser } from "../../hooks";
import Content from "./content";

const ProfilePage: FC = () => {
	const { userId } = useParams();
	const history = useHistory();
	const { user, isFetching } = useUser(userId);

	if (isFetching) {
		return (
			<Container>
				<H1>Fetching user profile....</H1>
			</Container>
		);
	}

	const goToHome = () => history.push("/");

	return (
		<Container>
			<H1>Profile</H1>
			{user ? <Content user={user} /> : <p>cant find: {userId}</p>}
			<Button onClick={goToHome}> Go Home</Button>
		</Container>
	);
};

export default ProfilePage;
