import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {filmService} from "../../services";


const initialState = {
    films: [],
    errors: null,
    filmForUpdate: null,
    loading: false
}

const getAll = createAsyncThunk(
    'filmSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await filmService.getAll();
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data());
        }
    }
)

















const create = createAsyncThunk(
    "filmSlice/create",
    async ({film}, {rejectWithValue}) => {
        try {
            const {data} = await filmService.create(film);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const deleteFilm = createAsyncThunk(
    "filmSlice/deleteById",
    async ({id}, {rejectWithValue}) => {
        try {
            await filmService.deleteById(id);
            return id;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    "filmSlice/updateById",
    async ({id, film}, {rejectWithValue}) => {
        try {
            const {data} = await filmService.updateById(id, film);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);






const filmSlice = createSlice({
    name: 'filmSlice',
    initialState,
    reducers: {
        setFilmForUpdate: (state, action) => {
            state.filmForUpdate = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.films = action.payload;
                state.errors = null;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(create.fulfilled, (state, action) => {
                state.films.push(action.payload);
            })
            .addCase(deleteFilm.fulfilled, (state, action) =>{
                const filmIndex = state.films.findIndex(value => value.id === action.payload);
                state.films.splice(filmIndex,1);
            })
            .addCase(updateById.fulfilled, (state, action) => {
                const findFilm = state.films.find(value => value.id === action.payload.id);
                Object.assign(findFilm,action.payload);
                state.filmForUpdate = null;
            })
            .addDefaultCase((state, action) => {
                const [pathElement] = action.type.split('/').splice(-1);
                if (pathElement === 'rejected') {
                    state.errors = action.payload;
                    state.loading = false;
                } else {
                    state.errors = null;
                }
            })


});

const {reducer: filmReducer, actions: {setFilmForUpdate}} = filmSlice;

const filmActions = {
    getAll, create, deleteFilm, updateById, setFilmForUpdate
};

export {
    filmActions,
    filmReducer
}
