import React, { FC } from "react";

import { Card, Content } from "./styles";

const Layout: FC = ({ children }) => {
	return (
		<Content>
			<Card>{children}</Card>
		</Content>
	);
};

export default Layout;
