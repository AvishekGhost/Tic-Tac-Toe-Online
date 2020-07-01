import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button, Error } from "../../components";
import { auth } from "../../services";

const Logout: FC = () => {
	const history = useHistory();

	const [isLoggingOut, setIsLoggingOut] = useState(false);
	const [firebaseError, setFirebaseError] = useState<string | undefined>(
		undefined
	);

	const handleClick = () => {
		setIsLoggingOut(true);
		setFirebaseError(undefined);

		auth
			.signOut()
			.then((res) => {
				console.log(res);
				setIsLoggingOut(false);
				history.push("/");
				window.location.reload(false);
			})
			.catch((err) => {
				console.log(err);
				setFirebaseError(err.message);
				setIsLoggingOut(false);
			});
	};

	return (
		<>
			<Button disabled={isLoggingOut} onClick={handleClick}>
				Log{isLoggingOut ? "ging" : ""} out
			</Button>
			{firebaseError && <Error>{firebaseError}</Error>}
		</>
	);
};

export default Logout;
