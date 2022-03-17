import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    liveInput: ""
}

export const manageNewData = createSlice({
    name: 'INPUTDATA',
    initialState,
    reducers: {
        setInput: (state, action) => {
            state.liveInput = action.payload
        },
    }
})

export const { setInput } = manageNewData.actions;

export default manageNewData.reducer;