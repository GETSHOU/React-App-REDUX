const FIRST_PLAYER = 'X';
const SECOND_PLAYER = 'O';

const STATUS_WIN = 'Победил: ';
const STATUS_DRAW = 'Ничья!';
const STATUS_MOVES = 'Ходит: ';

const WIN_PATTERNS = [
	[0, 1, 2], // Варианты побед по горизонтали
	[3, 4, 5], // Варианты побед по горизонтали
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6], // Варианты побед по вертикали
	[1, 4, 7], // Варианты побед по вертикали
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8], // Варианты побед по диагонали
	[2, 4, 6], // Варианты побед по диагонали
];

export {
	FIRST_PLAYER,
	SECOND_PLAYER,
	STATUS_WIN,
	STATUS_DRAW,
	STATUS_MOVES,
	WIN_PATTERNS,
};
