import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    alertUpdate: "",
    error: "",
    trigger: false,
    triggerErr: false
}

const alertSlice = createSlice({
    name: 'ALERT',
    initialState,
    reducers : {
        triggerAlert : (state, action) => {
            state.alertUpdate = action.payload
            state.trigger = !state.trigger
        },
        triggerErr : (state, action) => {
            state.error = action.payload
            state.triggerErr = !state.triggerErr
        }
    }
})

export default alertSlice.reducer;
export const { triggerAlert, triggerErr } = alertSlice.actions;