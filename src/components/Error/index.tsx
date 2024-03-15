const Error = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<h1>Error!</h1>
			<p>Something went wrong!</p>
			<br />
			<p>{children}</p>
		</div>
	);
};

export default Error;
