import path from 'path'

export const interceptorsRequestBind = (axiosInstance, middleware) => {
	return axiosInstance.interceptors.request.use(
		(config) => {
			return middleware(config);
		},
		(error) => {
			Promise.reject(error);
		}
	);
};

export const interceptorsResponseBind = (axiosInstance, middleware) => {
	return axiosInstance.interceptors.response.use(
		(response) => {
			return response;
		},
		async (error) => {
			const originalRequest = error.config;

			console.log("interceptorsResponseBind", error.response.status);

			if (error.response.status === 401 || error.response.status === 403 || error.response.status === 400) {
				return await middleware(originalRequest, error);
			}
			return Promise.reject(error);
		}
	);
};
