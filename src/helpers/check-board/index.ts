import { checkWin } from "../../helpers";
import { BLOCK } from "../../App";

interface Input {
	newBoard: BLOCK[];
	isXTurn: boolean;
	turnNumber: number;
}

type CheckBoardOutput = "XWIN" | "OWIN" | "DRAW" | "NONE";

export default function checkBoard({
	isXTurn,
	turnNumber,
	newBoard,
}: Input): CheckBoardOutput {
	if (turnNumber >= 5) {
		if (isXTurn && checkWin(newBoard, "x")) return "XWIN";
		if (!isXTurn && checkWin(newBoard, "o")) return "OWIN";
		if (turnNumber === 9) return "DRAW";
	}
	return "NONE";
}
