import { FC, memo } from 'react';
import { UserListProps } from '../../types';
import UserCard from '../UserCard';
import styles from './styles.module.css';

const UserList: FC<UserListProps> = memo(({ data, onClick }) => {
	return (
		<>
			{data ? (
				<div className={styles.container}>
					{data.map((user) => {
						return <UserCard key={user.email} data={user} onClick={onClick} />;
					})}
				</div>
			) : (
				<div>Nothing Found</div>
			)}
		</>
	);
});

export default UserList;
