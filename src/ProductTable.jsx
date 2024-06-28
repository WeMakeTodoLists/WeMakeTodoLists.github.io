import "./ProductTable.css";

function ProductTable({ products, searchBy }) {
	let filteredProducts = products.filter(
		(product) => product.name.toLowerCase().indexOf(searchBy) != -1
	);

	let duplicatedProducts = [];
	let id = 0;
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < filteredProducts.length; j++) {
			id++;
			duplicatedProducts.push({
				...filteredProducts[j],
				id,
			});
		}
	}

	return (
		<table>
			<tbody>
				{duplicatedProducts.map((product) => {
					return (
						<tr key={product.id}>
							<td id="productsContainer">
								<img
									id="productImage"
									src={product.image}
									alt="This would be a cool product :("
								/>
								<div id="productTextContainer">
									<h2 id="productName">{product.name}</h2>
									<div id="productSubtitleRow">
										<h4 id="productSeller">
											{product.seller}
										</h4>
										-
										<h4 id="productPrice">
											${product.price}
										</h4>
									</div>
									<p id="productDescription">
										{product.description}
									</p>
								</div>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default ProductTable;
