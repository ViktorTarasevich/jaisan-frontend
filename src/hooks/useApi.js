import { useState, useEffect, useRef } from "react";
import { axiosClient } from "../network/axios-client";

export const useApi = (url, method, payload) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState("");
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const response = await axiosClient.request({
					data: payload,
					method,
					url,
				});
				setData(response.data);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoaded(true);
			}
		})();
	}, []);
	return { data, error, loaded };
};
