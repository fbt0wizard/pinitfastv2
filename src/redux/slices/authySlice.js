import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    displayErr: false,
    err: "",
    userLoggedIn: false,
    noCookie: ""
}

const authSlice = createSlice({
    name: 'AUTHY',
    initialState,
    reducers: {
        unverifiedUser: (state) => {
            state.err = "Account unverified"
            state.displayErr = true
        },
        incorrectDetails: (state) => {
            state.err = 'incorrect username or password'
            state.displayErr = true
        },
        resetErr: (state) => {
            state.err = ""
            state.displayErr = false
        },
        authSucess: (state) => {
            state.userLoggedIn = true
        },
        exitUser: (state) => {
            state.userLoggedIn = false
        },
        redirect: (state, action) => {
            state.noCookie = action.payload
        }
    }
})

export const { unverifiedUser, incorrectDetails, resetErr, authSucess, exitUser, redirect } = authSlice.actions;
export default authSlice.reducer;