import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const API = 'https://jsonplaceholder.typicode.com';

export const getPhotosAsync = createAsyncThunk(
    'movies/getMoviesAsync', async () => {
        const data = await axios.get(`${API}/photos`);
        return data.data;
    }
);
export interface MoviesState {
    fetchMovieStatus: string,
    postMovieStatus: string,
    photos: []
}

const initialState: MoviesState = {
    photos: [],
    fetchMovieStatus: 'pending',
    postMovieStatus: 'pending'
};

export const photosSlice = createSlice({
    name: 'getPhotos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPhotosAsync.pending, (state) => {
                state.fetchMovieStatus = 'pending';
            })
            .addCase(getPhotosAsync.fulfilled, (state, action) => {
                state.photos = action.payload;
            })
            .addCase(getPhotosAsync.rejected, (state) => {
                state.fetchMovieStatus = 'rejected';
            })
    },
});

export default photosSlice.reducer;