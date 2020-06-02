export type SYMBOL = "X" | "O";
export type BLOCK = SYMBOL | null;

export interface Room {
	board: Array<SYMBOL | null>;
	isGameDone: boolean;
	playerTurn: SYMBOL;
	turnNumber: number;
	message: string;
}
