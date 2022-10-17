export const getPriceAllSelectedRows = (idList, productList) => {
	const relativeIdList = idList.map((id) => {
		const index = productList.findIndex((item) => {
			return item.articul === id;
		});
		return index >= 0 ? index : null;
	});

	const price = relativeIdList.reduce(function (accumulator, currentValue) {
		return accumulator + parseFloat(productList[currentValue].price);
	}, 0);

	return price;
};
