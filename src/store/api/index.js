import LocalStorage from './localStorage';

const axios = require('axios').default

const baseURL = 'https://nearby-api-dev.herokuapp.com'

const axiosApiInstance = axios.create({ baseURL: baseURL });

axiosApiInstance.interceptors.request.use(async config => {
    console.log('config: ', config);

    const { token } = await LocalStorage.get();
    console.log('local storage: ', token);

    if (token && config.url.includes('/api')) {
        config.headers = {
            'Authorization': `Bearer ${token.access_token}`,
        }
    }
    return config;
},
    error => {
        Promise.reject(error.response)
    });

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(response => {
    return response
}, async (error) => {
    const originalRequest = error.config;
    console.log('original request: ', originalRequest);
    if (error.response.status === 403 && !originalRequest._retry) {
        // originalRequest._retry = true;
        // const access_token = await refreshAccessToken();
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error.response);
});

const API = (() => {
    return {
        get: (path, options) => axiosApiInstance.get(path, options),
        delete: (path, param, options) => axiosApiInstance.delete(path, param, options),
        post: (path, param, options) => axiosApiInstance.post(path, param, options),
        put: (path, param, options) => axiosApiInstance.put(path, param, options),
    };
})();

export default API;