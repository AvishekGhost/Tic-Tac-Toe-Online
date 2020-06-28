import React, { FC, createContext, useContext, useState } from "react";

import { auth } from "../../services";

const UserContext = createContext<firebase.User | null | undefined>(null);

export const UserProvider: FC = ({ children }) => {
	const [user, setUser] = useState<firebase.User | null | undefined>();

	auth.onAuthStateChanged(setUser);

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
