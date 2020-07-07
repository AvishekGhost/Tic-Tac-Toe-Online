import React, { FC, useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { H1, Button, Field, Error } from "../../components";
import { validateEmail } from "../../helpers";
import { auth } from "../../services";
import { useCurrentUser, useSearchParams  } from "../../hooks";

const LoginPage: FC = () => {
	const user = useCurrentUser();
	const history = useHistory();
	const { redirect, player } = useSearchParams();

	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState<string | undefined>();
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState<string | undefined>();
	const [isLoginingIn, setIsLoginingIn] = useState(false);
	const [firebaseError, setFirebaseError] = useState<string | undefined>();

	const performRedirect = useCallback(() => {
    if (!redirect) return history.push('/')
    if (!player) return history.push(`/${redirect}`)
    return history.push(`/${redirect}?player=${player}`)
  }, [history, player, redirect])

	useEffect(() => {
    if (user) performRedirect()
  }, [performRedirect, user])

	useEffect(() => {
		setEmailError(undefined);
		setPasswordError(undefined);
	}, [email, password]);

	const goToHome = () => history.push("/");
	const goToSignup = () => history.push("/signup");

	const handleLogin = async () => {
		if (email.length === 0) return setEmailError("Email is req");
		if (!validateEmail(email)) setEmailError("Email must be valid");
		if (password.length === 0) return setPasswordError("Password is req");
		if (password.length < 6)
			return setPasswordError("Password must be atleast 6 chars long");

		setIsLoginingIn(true);

		try {
      await auth.signInWithEmailAndPassword(email, password)
      performRedirect()
    } catch (err) {
      setFirebaseError(err.message)
      setIsLoginingIn(false)
    }
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
			<Button disabled={isLoginingIn} onClick={handleLogin}>
				Log{isLoginingIn ? "ging" : ""} in
			</Button>
			<Button onClick={goToSignup}>Register</Button>
			<Button onClick={goToHome}>Back To Home</Button>
		</>
	);
};

export default LoginPage;
