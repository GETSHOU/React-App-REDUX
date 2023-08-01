import { useState, useEffect } from 'react';
import { store } from '../../store.js';
import styles from './Field.module.css';

export const Field = ({constant}) => {
	const [ state, setState ] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
      setState(store.getState())
    })

    return () => unsubscribe();
	}, []);

	let field = state.field;
	let status = state.status;
	let currentPlayer = state.currentPlayer;

	const fieldCopy = [...field];

	const checkWin = (field, currentPlayer) => {
		return constant.WIN_PATTERNS.some((winPattern) => {
			return winPattern.every((cellIndex) => field[cellIndex] === currentPlayer);
		});
	};

	const handleMove = (i, cellValue) => {
		if (status === constant.STATUS_WIN
			|| status === constant.STATUS_DRAW
			|| cellValue !== '') {
			return;
		}

		fieldCopy[i] = currentPlayer;
		store.dispatch({type: 'SET_FIELD', payload: fieldCopy});

		if(checkWin(fieldCopy, currentPlayer)) {
			store.dispatch({type: 'SET_STATUS', payload: constant.STATUS_WIN});
		} else if (!checkWin(fieldCopy, currentPlayer) && !fieldCopy.includes('')) {
			store.dispatch({type: 'SET_STATUS', payload: constant.STATUS_DRAW});
		}	else if (currentPlayer === constant.FIRST_PLAYER) {
			store.dispatch({type: 'SET_CURRENT_PLAYER', payload: constant.SECOND_PLAYER});
		}	else {
			store.dispatch({type: 'SET_CURRENT_PLAYER', payload: constant.FIRST_PLAYER});
		}
	};

	return (
		<div className={styles.fieldWrapper}>
			<div className={styles.field}>
				{field.map((cellValue, i) => {
					return (
						<button
							key={i}
							className={styles.cell}
							onClick={() => handleMove(i, cellValue)}
						>
							{cellValue}
						</button>
							);
				})}
			</div>
		</div>
	);
}
