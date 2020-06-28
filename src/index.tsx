import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Routes from "./routes";
import Layout from "./layout";

import { UserProvider } from "./hooks";

import { GlobalStyles, theme } from "./styles";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<BrowserRouter>
				<UserProvider>
					<Layout>
						<Routes />
					</Layout>
				</UserProvider>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.unregister();
