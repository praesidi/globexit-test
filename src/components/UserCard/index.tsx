import styles from './style.module.css';
import phoneIcon from '../../assets/icons/phone.svg';
import emailIcon from '../../assets/icons/email.svg';
import { UserCardProps } from '../../types';
import { FC } from 'react';

const UserCard: FC<UserCardProps> = ({ data, onClick }) => {
	return (
		<div className={styles.wrapper} onClick={() => onClick(data)}>
			<div className={styles.title}>{data.name}</div>
			<div>
				<div className={styles.row}>
					<span className={styles.icon}>
						<span className={styles['icon-wrapper']}>
							<img src={phoneIcon} alt='phone icon' />
						</span>
					</span>
					<span className={styles.value}>{data.phone}</span>
				</div>
				<div className={styles.row}>
					<span className={styles.icon}>
						<span className={styles['icon-wrapper']}>
							<img src={emailIcon} alt='email icon' />
						</span>
					</span>
					<span className={styles.value}>{data.email}</span>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
