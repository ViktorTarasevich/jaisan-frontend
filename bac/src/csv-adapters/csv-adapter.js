export const schemaAssembler = (record, provider) => {
	const productBulkPart = {
		additional_info: {},
		provider,
	};

	for (const prop in record) {
		if (prop === "Бренд") {
			productBulkPart["brand"] = record[prop];
		} else if (prop === "Артикул") {
			productBulkPart["articul"] = record[prop];
		} else if (prop === "Количество") {
			const rxp = record[prop].match(/(?<count>[0-9]{0,})/gi);

			productBulkPart["in_stock"] = Number.parseInt(
				rxp.filter((value) => value.trim().length > 0)[0]
			);
		} else if (prop === "Цена клиента BYN") {
			productBulkPart["price"] = Number.parseFloat(
				record[prop].replace(",", ".")
			);
		} else if (prop === "Наименование") {
			productBulkPart["name"] = record[prop];
		} else {
			productBulkPart.additional_info[prop] = record[prop];
		}
	}

	if (Object.keys(productBulkPart.additional_info).length) {
		productBulkPart.additional_info = JSON.stringify(
			productBulkPart.additional_info
		);
	} else {
		productBulkPart.additional_info = "";
	}

	return productBulkPart;
};
