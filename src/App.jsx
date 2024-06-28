import { useState } from "react";
import "./App.css";
import ProductTable from "./ProductTable";
import { dummyData } from "./productData";
import SearchBar from "./SearchBar";

function App() {
	const [searchBy, setSearchBy] = useState("");

	return (
		<>
			<SearchBar makeSearch={setSearchBy} />
			<ProductTable products={dummyData} searchBy={searchBy} />
		</>
	);
}

export default App;
