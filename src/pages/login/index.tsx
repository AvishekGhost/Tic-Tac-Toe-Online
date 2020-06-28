import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { H1, Button, Field, Error } from "../../components";
import { validateEmail } from "../../helpers";
import { auth } from "../../services";
import { useCurrentUser } from "../../hooks";

const LoginPage: FC = () => {
	const user = useCurrentUser();
	const history = useHistory();

	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState<string | undefined>();
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState<string | undefined>();
	const [isLoginingUp, setIsLoginingUp] = useState(false);
	const [firebaseError, setFirebaseError] = useState<string | undefined>();

	useEffect(() => {
		if (user) history.push("/");
	}, [history, user]);

	useEffect(() => {
		setEmailError(undefined);
		setPasswordError(undefined);
		setFirebaseError(undefined);
	}, [email, password]);

	const goToHome = () => history.push("/");
	const goToSignup = () => history.push("/signup");

	const handleLogin = () => {
		if (email.length === 0) return setEmailError("Email is req");
		if (!validateEmail(email)) setEmailError("Email must be valid");
		if (password.length === 0) return setPasswordError("Password is req");
		if (password.length < 6)
			return setPasswordError("Password must be atleast 6 chars long");

		setIsLoginingUp(true);

		auth
			.signInWithEmailAndPassword(email, password)
			.then((res) => {
				console.log(res);
				setIsLoginingUp(false);
			})
			.catch((err) => {
				console.log(err);
				setFirebaseError(err.message);
				setIsLoginingUp(false);
			});
	};

	return (
		<>
			<H1>Login</H1>
			<Field
				errMessage={emailError}
				id="email"
				label="Email"
				onChange={setEmail}
				value={email}
				type="email"
				placeHolder="Enter Email"
				required
			/>
			<Field
				errMessage={passwordError}
				id="password"
				label="Password"
				onChange={setPassword}
				value={password}
				type="password"
				placeHolder="Enter Password"
				required
			/>
			{firebaseError && <Error>{firebaseError}</Error>}
			<Button disabled={isLoginingUp} onClick={handleLogin}>
				Log{isLoginingUp ? "ging" : ""}in
			</Button>
			<Button onClick={goToSignup}>Register</Button>
			<Button onClick={goToHome}>Back To Home</Button>
		</>
	);
};

export default LoginPage;
