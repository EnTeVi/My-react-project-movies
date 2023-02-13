import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {filmService} from "../../services";
import {store} from "../store";


const initialState = {
    films: [],
    genres:[],
    selectedGenre:0,
    search: [],
    selectedSearch: 0,
    errors: null,
    filmForUpdate: null,
    loading: false
}

const getAll = createAsyncThunk(
    'filmSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await filmService.getAll();
            console.log("FILM DATA ",data)
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data());
        }
    }
)

const getAllGenres = createAsyncThunk(
    'filmSlice/genres',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await filmService.genres();
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data());
        }
    }
)
function selectedGen (){
    console.log("store", store.getState());
    return store.getState()["selectedGenre"].selectedGenre;
}
const getFilteredFilms = createAsyncThunk(
    'filmSlice/filteredFilms',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await filmService.filmsWithGenres(selectedGen());
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data());
        }
    }
)



function selectedSearch (){
    console.log("stores", store.getState());
    return store.getState()["selectedSearch"].selectedSearch;
}



// не потрібно
const getSearchFilms = createAsyncThunk(
    'filmSlice/searchFilms',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} =await filmService.search();
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data());
        }
    }
)

const getSearchFilteredFilms = createAsyncThunk(
    'filmSlice/searchFilms',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} =await filmService.search(selectedSearch());
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data());
        }
    }
)




const filmSlice = createSlice({
    name: 'filmSlice',
    initialState,
    reducers: {
        setSelectedSearch: (state, action) => {
            state.selectedSearch = action.payload;
        },
        setSelectedGenre:(state, action) => {
            state.selectedGenre = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.films = action.payload.results;
                state.errors = null;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
                state.errors = null;
                state.loading = false;
            })
            .addCase(getFilteredFilms.fulfilled, (state, action) => {
                state.films = action.payload.results;
                state.errors = null;
                state.loading = false;
            })


            // не потрібно
            .addCase(getSearchFilms.fulfilled, (state, action) => {
                state.search = action.payload;
                state.errors = null;
                state.loading = false;
            })
            .addCase(getSearchFilteredFilms.fulfilled, (state, action) => {
                state.films = action.payload.results;
                state.errors = null;
                state.loading = false;
            })


});



const {reducer: filmReducer, actions: {setSelectedGenre, setSelectedSearch}} = filmSlice;

const filmActions = {
    getAll, getAllGenres, getFilteredFilms, getSearchFilms, getSearchFilteredFilms, setSelectedSearch, setSelectedGenre
};

export {
    filmActions,
    filmReducer
}
