import React, { FC, useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Field, Button } from "../../../components";
import { User } from "../../../typings";
import { useCurrentUser, useUpdateProfile } from "../../../hooks";

const Content: FC<{ user: User }> = ({ user }) => {
	const { userId } = useParams();
	const currentUser = useCurrentUser();
	const { isUpdating, updateProfile } = useUpdateProfile(userId);
	const [displayName, setDisplayName] = useState(user.displayName);

	const isCurrentUser: boolean = useMemo(() => currentUser?.id === userId, [
		currentUser,
		userId,
	]);

	useEffect(() => {
		setDisplayName(user.displayName);
	}, [user]);

	const handleUpdate = () => {
		if (isCurrentUser) updateProfile(displayName);
	};

	return (
		<>
			<Field
				disabled={!isCurrentUser}
				id="display-name"
				label="Display Name"
				placeHolder="Enter display name"
				onChange={setDisplayName}
				value={displayName}
			/>
			{isCurrentUser && (
				<Button disabled={isUpdating} onClick={handleUpdate}>
					Updat{isUpdating ? "ing" : "e"}
				</Button>
			)}
		</>
	);
};

export default Content;
