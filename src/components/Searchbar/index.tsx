import styles from './style.module.css';
import searchIcon from '../../assets/icons/search.svg';

const Searchbar = ({
	value,
	onChange,
}: {
	value: string;
	onChange: (args0: string) => void;
}) => {
	return (
		<div className={styles.wrapper}>
			<input
				className={styles.input}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				type='text'
			/>
			<img src={searchIcon} className={styles.icon} alt='search icon' />
		</div>
	);
};

export default Searchbar;
