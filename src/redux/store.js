import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {filmReducer} from "./slices/film.slice";


const rootReducer = combineReducers({
    films: filmReducer,
    genres: filmReducer,
    selectedGenre: filmReducer,
    selectedSearch: filmReducer

});

const setupStore = () => configureStore({
    reducer: rootReducer
});


const store = setupStore();

export {
    store
}