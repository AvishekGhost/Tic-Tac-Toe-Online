import React, { FC, createContext, useContext, useState } from "react";

import { auth } from "../../services";
import { useUser } from "../../hooks";
import { User } from "../../typings";

const CurrentUserContext = createContext<User | undefined>(undefined);

export const CurrentUserProvider: FC = ({ children }) => {
	const [userId, setUserId] = useState<string | undefined>(undefined);
	const { user } = useUser(userId);

	auth.onAuthStateChanged((u) => setUserId(u?.uid));

	return (
		<CurrentUserContext.Provider value={user}>
			{children}
		</CurrentUserContext.Provider>
	);
};

export const useCurrentUser = () => useContext(CurrentUserContext);
