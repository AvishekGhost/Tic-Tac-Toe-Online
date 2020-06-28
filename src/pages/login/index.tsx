import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { H1, Button, Field } from "../../components";
import { validateEmail } from "../../helpers";

const LoginPage: FC = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState<string | undefined>();
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState<string | undefined>();

	useEffect(() => {
		setEmailError(undefined);
		setPasswordError(undefined);
	}, [email, password]);

	const goToHome = () => history.push("/");
	const goToSignup = () => history.push("/signup");

	const handleLogin = () => {
		if (email.length === 0) return setEmailError("Email is req");
		if (!validateEmail(email)) setEmailError("Email must be valid");
		if (password.length === 0) return setPasswordError("Password is req");
		if (password.length < 6)
			return setPasswordError("Password must be atleast 6 chars long");

		alert("login");
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
			<Button onClick={handleLogin}>Login</Button>
			<Button onClick={goToSignup}>Register</Button>
			<Button onClick={goToHome}>Back To Home</Button>
		</>
	);
};

export default LoginPage;
