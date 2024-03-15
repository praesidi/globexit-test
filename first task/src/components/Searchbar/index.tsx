import styles from './style.module.css';
import searchIcon from '../../assets/icons/search.svg';
import { SearchBarProps } from '../../types';
import { FC } from 'react';

const Searchbar: FC<SearchBarProps> = ({ value, onChange }) => {
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
