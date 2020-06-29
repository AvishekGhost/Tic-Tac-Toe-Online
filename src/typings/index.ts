export type SYMBOL = "X" | "O";
export type BLOCK = SYMBOL | null;

export interface Room {
	board: Array<SYMBOL | null>;
	isGameDone: boolean;
	message: string;
	playerTurn: SYMBOL;
	playerXId?: string;
	playerOId?: string;
	startingTurn: SYMBOL;
	turnNumber: number;
}

export interface User {
	displayName: string;
	id: string;
}

export interface RoomItem {
	id: string;
	owner: string;
}
