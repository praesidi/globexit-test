import styles from './styles.module.css';

const LoadSpinner = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles['sbl-circ-ripple']}></div>
		</div>
	);
};

export default LoadSpinner;
