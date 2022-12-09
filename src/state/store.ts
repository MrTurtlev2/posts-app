import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import GetPhotosSlice from "./photos/GetPhotosSlice";
import UserDataSlice from "./user/UserDataSlice";

export const store = configureStore({
    reducer: {
        getPhotos: GetPhotosSlice,
        getUserData: UserDataSlice,
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