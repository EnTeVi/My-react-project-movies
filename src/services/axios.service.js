import axios from "axios";

import {baseURL} from "../config";

const axiosService = axios.create({baseURL});

const apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmY5NDA4YzJhNjk0OGJhMGVkYmU0YmEyNzc2NWFiNyIsInN1YiI6IjYzNGRiOTY2YWY1OGNiMDA3YTNkOTgxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KqcMJ7Dc0vcGgvs84FJavvi1hebLPjtFcad4r7yDnCA';

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${apiToken}`;
    console.log(config);
    return config;
})

export {
    axiosService
}
