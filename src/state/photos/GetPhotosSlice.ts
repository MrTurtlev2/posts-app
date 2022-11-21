import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const API = 'https://jsonplaceholder.typicode.com';

export const getPhotosAsync = createAsyncThunk(
    'movies/getMoviesAsync', async () => {
        const data = await axios.get(`${API}/photos`);
        console.log(data.data)
        return data.data;
    }
);

export interface MoviesState {
    fetchMovieStatus: string,
    postMovieStatus: string,
    photos: [
        {
            albumId: number
            id: number
            title: string
            thumbnailUrl: string
        }
    ]
}

const initialState: MoviesState = {
    photos: [
        {
            albumId: 0,
            id: 0,
            title: '',
            thumbnailUrl: ''
        }
    ],
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