import styles from './style.module.css';
import xMarkIcon from '../../assets/icons/x-mark.svg';
import { ModalProps } from '../../types';
import { FC } from 'react';

const Modal: FC<ModalProps> = ({ user, onClose }) => {
	return (
		<div className={styles.wrapper} onClick={() => onClose()}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<div className={styles.header}>
					<h2 className={styles.title}>{user?.name}</h2>
					<button className={styles['close-button']} onClick={() => onClose()}>
						<img src={xMarkIcon} alt='close button icon' />
					</button>
				</div>
				<div className={styles['user-information-wrapper']}>
					{/* phone number */}
					<div className={styles['user-information-row']}>
						<span className={styles['user-information-property']}>
							Телефон:
						</span>
						<span className={styles['user-information-value']}>
							{user?.phone}
						</span>
					</div>

					{/* email */}
					<div className={styles['user-information-row']}>
						<span className={styles['user-information-property']}>Почта:</span>
						<span className={styles['user-information-value']}>
							{user?.email}
						</span>
					</div>

					{/* employment date */}
					<div className={styles['user-information-row']}>
						<span className={styles['user-information-property']}>
							Дата приема:
						</span>
						<span className={styles['user-information-value']}>
							{user?.hire_date}
						</span>
					</div>

					{/* role */}
					<div className={styles['user-information-row']}>
						<span className={styles['user-information-property']}>
							Должность:
						</span>
						<span className={styles['user-information-value']}>
							{user?.position_name}
						</span>
					</div>

					{/* department */}
					<div className={styles['user-information-row']}>
						<span className={styles['user-information-property']}>
							Подразделение:
						</span>
						<span className={styles['user-information-value']}>
							{user?.department}
						</span>
					</div>
				</div>

				<div className={styles['additional-information-wrapper']}>
					<div>Дополнительная информация:</div>
					<p>
						Разработчики используют текст в качестве заполнителя макета
						страницы. Разработчики используют текст в качестве заполнителя
						макета страницы.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Modal;
