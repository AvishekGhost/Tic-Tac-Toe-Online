import React, { FC, createContext, useContext, useState } from "react";

import { auth } from "../../services";

const CurrentUserContext = createContext<firebase.User | null | undefined>(
	null
);

export const CurrentUserProvider: FC = ({ children }) => {
	const [user, setUser] = useState<firebase.User | null | undefined>();

	auth.onAuthStateChanged(setUser);

	return (
		<CurrentUserContext.Provider value={user}>
			{children}
		</CurrentUserContext.Provider>
	);
};

export const useCurrentUser = () => useContext(CurrentUserContext);
