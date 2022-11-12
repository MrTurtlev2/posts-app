import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import GetPhotosSlice, {photosSlice} from "./photos/GetPhotosSlice";
// import moviesReducer from '../features/movies/movieSlice'

export const store = configureStore({
    reducer: {
        getPhotos: GetPhotosSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;