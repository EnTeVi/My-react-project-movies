import {axiosService} from "./axios.service";
import {urls} from "../config";


const filmService = {
    getAll: () => axiosService.get(urls.allMovie)
}

export {
    filmService
}