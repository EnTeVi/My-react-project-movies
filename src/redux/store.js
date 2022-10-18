import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {filmReducer} from "./slices/film.slice";


const rootReducer = combineReducers({
    films: filmReducer
});

const serupStore = () => configureStore({
    reducer: rootReducer
});

export {
    serupStore
}