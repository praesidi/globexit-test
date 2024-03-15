import { useEffect, useState } from 'react';
import { User } from '../types';

const useFetch = (url: string) => {
	const [data, setData] = useState<User[] | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState();

	useEffect(() => {
		setIsLoading(true);

		const getData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();

				setData(data);
			} catch (error) {
				setError(error);
			}
			setIsLoading(false);
		};
		getData();
	}, [url]);

	return { data, isLoading, error };
};

export default useFetch;
