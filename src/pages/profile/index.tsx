import React, { FC } from "react";
import { useParams, useHistory } from "react-router-dom";

import { H1, Button } from "../../components";
import { useUser } from "../../hooks";
import Content from "./content";

const ProfilePage: FC = () => {
	const { userId } = useParams();
	const history = useHistory();
	const { user, isFetching } = useUser(userId);

	if (isFetching) return <H1>Fetching user profile....</H1>;

	console.log({ user });

	const goToHome = () => history.push("/");

	return (
		<>
			<H1>profile</H1>
			{user ? <Content user={user} /> : <p>cant find: {userId}</p>}
			<Button onClick={goToHome}> Go Home</Button>
		</>
	);
};

export default ProfilePage;
