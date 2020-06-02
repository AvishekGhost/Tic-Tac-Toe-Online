import { useEffect, useState } from "react";

import { db } from "../../services";
import { Room } from "../../typings";

interface Output {
	isFetching: boolean;
	room?: Room;
}

const useRoom = (id: string): Output => {
	const [isFetching, setIsFetching] = useState<boolean>(true);
	const [room, setRoom] = useState<Room | undefined>();

	useEffect(() => {
		const unsubscribe = db
			.collection("rooms")
			.doc(id)
			.onSnapshot(
				(doc: any) => {
					console.log(doc.data());
					if (doc.exists) setRoom(doc.data() as Room);
					setIsFetching(false);
				}
				// ,
				// (err: any) => {
				// 	setIsFetching(false);
				// 	return console.log("error", err);
				// }
			);

		return () => {
			unsubscribe();
		};
	}, [id]);

	return { isFetching, room };
};

export default useRoom;
