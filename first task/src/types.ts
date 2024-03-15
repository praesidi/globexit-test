export interface User {
	name: string;
	phone: string;
	email: string;
	address: string;
	position_name: string;
	department: string;
	hire_date: string;
}

export interface ModalProps {
	user: User | undefined;
	onClose: () => void;
}

export interface UserCardProps {
	data: User;
	onClick: (args0: User) => void;
}

export interface UserListProps {
	data: User[] | null;
	onClick: (args0: User) => void;
}

export interface SearchBarProps {
	value: string;
	onChange: (args0: string) => void;
}
