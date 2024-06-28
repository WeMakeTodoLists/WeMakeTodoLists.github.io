import { useState } from "react";

function SearchBar({ makeSearch }) {
	const [searchTerm, setSearchTerm] = useState("");

	function onSubmitSearch(e) {
		e.preventDefault();
		makeSearch(searchTerm);
		setSearchTerm("");
	}

	return (
		<form onSubmit={onSubmitSearch}>
			<input
				type="text"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<button type="submit">Search</button>
		</form>
	);
}

export default SearchBar;
