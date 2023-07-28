import styles from './App.module.css';
import { Game } from './components/Game/Game.jsx';

export const App = () => {
	return (
		<div className={styles.app}>
			<h1 className={styles.appTitle}>Игра "Крестики-нолики"</h1>
			<Game />
		</div>
	);
};
