import { store } from '../../store.js'
import * as constant from '../../constants.js'
import { Field } from '../Field/Field.jsx';
import { Information } from '../Information/Information.jsx';
import styles from './Game.module.css';

export const Game = () => {
	const handleRestart = () => store.dispatch({type: 'INITIAL'});

	return (
		<div className={styles.gameWrapper}>
			<Information constant={constant}/>
			<Field constant={constant}/>
			<button className={styles.buttonStartOver} onClick={handleRestart}>
				Начать заново
			</button>
		</div>
	);
};
