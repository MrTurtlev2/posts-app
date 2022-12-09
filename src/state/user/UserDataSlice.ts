import {createSlice} from "@reduxjs/toolkit";

export interface UserDataInterface {
    user: {
        isLoggedIn: boolean;
        name: string;
        lastName: string;
        password: string;
    }
}

const initialState: UserDataInterface = {
    user: {
        isLoggedIn: false,
        name: '',
        lastName: '',
        password: '',
    }
};

export const userDataSlice = createSlice({
    name: 'getUserData',
    initialState,
    reducers: {
        logUserWithCredentials: (state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: {}
});

// @ts-ignore
export const {logUserWithCredentials} = userDataSlice.actions
export default userDataSlice.reducer;