import { axiosInstance } from "./axios-instance.js";

export const searchProductsByArticul = async (articul) => {
	return axiosInstance.get(
		`/articles/search?searchString=${articul}&include=contents%2Cextended_info`
	)
		.then(res => {
			console.log(res)
			const { data } = res;

			return data
		})
		.catch(e => {
		// console.log(e.response.status);
		// console.log(e.response.data);
	});
	// return res.data;
};
