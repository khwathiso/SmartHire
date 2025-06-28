import { createSlice, isAction } from '@reduxjs/toolkit'
import Login from '../../pages/Auth/Login';

const initialState = {
    user: null, // user will be set after login
};


const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers:  {
        LoginUser(state, action){
        state.user = action.payload;
        },
        logoutUser(state){
            state.user = null;
        }
    },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;