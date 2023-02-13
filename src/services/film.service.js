import {axiosService} from "./axios.service";
import {urls} from "../config";
import films from "../moc/all.json"
// import genres from "../moc/genres.json"




const restFilmService = {
    getAll: () => axiosService.get(urls.allMovie),
    genres: () => axiosService.get(urls.movieGenders),
    filmsWithGenres: (genres) => axiosService.get(`${urls.allMovie}?with_genres=${genres}`),
    search: () => axiosService.get(urls.searchMovie) /*----- переписати, добавити дані з інпута*/
}



// const staticFilmService = {
//     getAll: () => Promise.resolve({data:films}),
//     genres: () => Promise.resolve(genres)
// }

const filmService = restFilmService;

export {
    filmService
}