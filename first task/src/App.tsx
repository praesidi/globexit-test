import './App.css';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from './components/Searchbar';
import Modal from './components/Modal';
import useFetch from './hooks/useFetch';
import Error from './components/Error';
import getUrl from './helpers/getUrl';
import UserList from './components/UserList';
import { User } from './types';
import LoaderSpinner from './components/LoaderSpinner';
import useDebounce from './hooks/useDebounce';

const App = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [selectedUser, setSelectedUser] = useState<User>();

	const query = useMemo(() => searchParams.get('query') || '', [searchParams]);

	const debouncedSearchTerm = useDebounce(query, 1000);

	const url = useMemo(
		() => getUrl(debouncedSearchTerm || ''),
		[debouncedSearchTerm],
	);

	const { data, isLoading, error } = useFetch(url);

	// prevents scroll when modal is open
	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isModalOpen]);

	const handleSearchbarChange = (value: string) => {
		searchParams.set('query', value);
		setSearchParams(searchParams);
	};

	const handleCardClick = (user: User) => {
		setSelectedUser(user);
		setIsModalOpen(true);
	};

	if (error) {
		<Error>{error}</Error>;
	}

	return (
		<>
			<Searchbar
				value={searchParams.get('query') || ''}
				onChange={handleSearchbarChange}
			/>
			{isLoading ? (
				<LoaderSpinner />
			) : (
				<UserList data={data} onClick={handleCardClick} />
			)}
			{isModalOpen ? (
				<Modal user={selectedUser} onClose={() => setIsModalOpen(false)} />
			) : null}
		</>
	);
};

export default App;
