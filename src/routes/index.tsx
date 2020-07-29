import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { H1, Container } from "../components";

const Home = lazy(() => import("../pages/home"));
const Room = lazy(() => import("../pages/room"));
const Login = lazy(() => import("../pages/login"));
const Signup = lazy(() => import("../pages/signup"));
const Profile = lazy(() => import("../pages/profile"));
const Rooms = lazy(() => import("../pages/rooms"));

const Routes = () => (
	<Switch>
		<Suspense
			fallback={
				<Container>
					<H1>Loading Page...</H1>
				</Container>
			}
		>
			<Route exact path="/r/:roomId" component={Room} />
			<Route exact path="/r" component={Rooms} />
			<Route exact path="/u/:userId" component={Profile} />
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={Signup} />
		</Suspense>
	</Switch>
);

export default Routes;
