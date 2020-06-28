import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { H1 } from "../components";

const Home = lazy(() => import("../pages/home"));
const Room = lazy(() => import("../pages/room"));
const Login = lazy(() => import("../pages/login"));
const Signup = lazy(() => import("../pages/signup"));
const Profile = lazy(() => import("../pages/profile"));

const Routes = () => (
	<Switch>
		<Suspense fallback={<H1>Loading Page...</H1>}>
			<Route exact path="/r/:roomId" component={Room} />
			<Route exact path="/u/:userId" component={Profile} />
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={Signup} />
		</Suspense>
	</Switch>
);

export default Routes;
