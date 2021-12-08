import axios from 'axios';
import {API_URL} from "../config/constants";
import {store} from '../redux/store';

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {}
});

axiosInstance.interceptors.request.use(request => {
    const state = store.getState();

    if (state.User.token !== null) {
        request.headers.common.Authorization = `Bearer ${state.User.token}`;
    }

    return request;
});

export default axiosInstance;