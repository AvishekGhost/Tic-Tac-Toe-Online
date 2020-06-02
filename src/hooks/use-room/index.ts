import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { db } from "../../services";
import { Room } from "../../typings";

interface Output {
	isFetching: boolean;
	room?: Room;
}

const useRoom = (): Output => {
	const { roomId } = useParams();
	const [isFetching, setIsFetching] = useState<boolean>(true);
	const [room, setRoom] = useState<Room | undefined>();

	useEffect(() => {
		const unsubscribe = db
			.collection("rooms")
			.doc(roomId)
			.onSnapshot((doc: any) => {
				console.log(doc.data());
				if (doc.exists) setRoom(doc.data() as Room);
				setIsFetching(false);
			});

		return () => {
			unsubscribe();
		};
	}, [roomId]);

	return { isFetching, room };
};

export default useRoom;
