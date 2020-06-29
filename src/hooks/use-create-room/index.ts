import { useState } from "react";

import { db } from "../../services";
import { useCurrentUser } from "../../hooks";

function genId(): string {
	var result = "";
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	var charactersLength = characters.length;
	for (var i = 0; i < 4; i++)
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	return result;
}

interface Output {
	createRoom: () => void;
	isCreatingRoom: boolean;
}

const useCreateRoom = (): Output => {
	const user = useCurrentUser();
	const [isCreatingRoom, setIsCreatingRoom] = useState(false);

	async function createRoom(): Promise<string | undefined> {
		if (!user) return undefined;

		setIsCreatingRoom(true);
		let outPut: string | undefined = undefined;

		try {
			const userDetails = await db.collection("users").doc(user.id).get();

			if (userDetails.data()?.roomId) {
				return (outPut = userDetails.data()?.roomId);
			}
			let randomRoomId = genId();
			while (true) {
				const foundRoom = await db.collection("rooms").doc(randomRoomId).get();
				if (foundRoom.exists) randomRoomId = genId();
				else break;
			}

			const startingTurn = Math.round(Math.random()) ? "X" : "O";

			await db
				.collection("rooms")
				.doc(randomRoomId)
				.set({
					board: [null, null, null, null, null, null, null, null, null],
					isGameDone: false,
					owner: user.id,
					message: `${startingTurn}'s Turn`,
					playerTurn: startingTurn,
					startingTurn: startingTurn,
					turnNumber: 1,
				});

			await db.collection("users").doc(user.id).update({
				roomId: randomRoomId,
			});

			outPut = randomRoomId;
		} catch (err) {
			console.log(err);
		} finally {
			setIsCreatingRoom(false);
			return outPut;
		}
	}

	return { createRoom, isCreatingRoom };
};

export default useCreateRoom;
