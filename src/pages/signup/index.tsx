import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { H1, Button, Field, Error } from "../../components";
import { validateEmail } from "../../helpers";
import { auth } from "../../services";
import { useUser } from "../../hooks";

const SignUpPage: FC = () => {
	const user = useUser();
	const history = useHistory();

	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState<string | undefined>();
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState<string | undefined>();
	const [confirmPassword, setConfirmPassword] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState<
		string | undefined
	>();
	const [firebaseError, setFirebaseError] = useState<string | undefined>();
	const [isSigningUp, setIsSigningUp] = useState(false);

	useEffect(() => {
		if (user) history.push("/");
	}, [history, user]);

	useEffect(() => {
		setEmailError(undefined);
		setPasswordError(undefined);
		setConfirmPasswordError(undefined);
		setFirebaseError(undefined);
	}, [email, password, confirmPassword]);

	useEffect(() => {
		if (password.length > 0 && password.length < 6)
			setPasswordError("Password must be at least 6 chars long");
		else setPasswordError(undefined);

		if (confirmPassword.length > 0) {
			if (password !== confirmPassword) {
				setPasswordError("Password do not match");
				setConfirmPasswordError("Password do not match");
			} else {
				setPasswordError(undefined);
				setConfirmPasswordError(undefined);
			}
		}

		if (email.length > 0 && !validateEmail(email))
			setEmailError("Enter a valid email");
		else setEmailError(undefined);
	}, [email, password, confirmPassword]);

	const goToHome = () => history.push("/");
	const goToLogin = () => history.push("/login");

	const handleSignup = () => {
		if (email.length === 0) return setEmailError("Email is req");
		if (!validateEmail(email)) setEmailError("Email must be valid");
		if (password.length === 0) return setPasswordError("Password is req");
		if (password.length < 6)
			return setPasswordError("Password must be atleast 6 chars long");
		if (confirmPassword.length === 0)
			return setConfirmPasswordError("Confirm Password is req");
		if (password !== confirmPassword) {
			setPasswordError("Password do not match");
			return setConfirmPasswordError("Password do not match");
		}

		setIsSigningUp(true);

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((res) => {
				console.log(res);
				setIsSigningUp(false);
			})
			.catch((err) => {
				setFirebaseError(err.message);
				setIsSigningUp(false);
			});
		setIsSigningUp(false);
	};

	return (
		<>
			<H1>Sign up</H1>
			<Field
				errMessage={emailError}
				id="email"
				label="Email"
				onChange={setEmail}
				value={email}
				type="email"
				required
				placeHolder="Enter Email"
			/>
			<Field
				errMessage={passwordError}
				id="password"
				label="Password"
				onChange={setPassword}
				value={password}
				type="password"
				required
				placeHolder="Enter Password"
			/>
			<Field
				errMessage={confirmPasswordError}
				id="confirm-password"
				label="Confirm Password"
				onChange={setConfirmPassword}
				value={confirmPassword}
				type="password"
				required
				placeHolder="Confirm Password"
			/>
			{firebaseError && <Error>{firebaseError}</Error>}
			<Button disabled={isSigningUp} onClick={handleSignup}>
				Sign{isSigningUp ? "ing" : ""}up
			</Button>
			<Button onClick={goToLogin}>Login</Button>
			<Button onClick={goToHome}>Back To Home</Button>
		</>
	);
};

export default SignUpPage;
