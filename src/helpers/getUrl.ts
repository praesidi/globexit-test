const getUrl = (query: string) => {
	if (query) {
		return `http://127.0.0.1:3000?term=${query}`;
	} else {
		return 'http://127.0.0.1:3000';
	}
};

export default getUrl;
