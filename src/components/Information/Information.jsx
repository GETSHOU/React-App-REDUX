import { useState, useEffect } from 'react';
import { store } from '../../store.js';
import styles from './Information.module.css';

export const Information = ({constant}) => {
	const [ state, setState ] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
      setState(store.getState())
    })

    return () => unsubscribe();
	}, []);

	let status = state.status;
	let currentPlayer = state.currentPlayer;

	return (
		<div className={styles.information}>
			{`${status}${(status !== constant.STATUS_DRAW) ? currentPlayer : ''}`}
		</div>
	)
};
