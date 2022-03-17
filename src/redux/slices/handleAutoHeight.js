import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    roll: false
}

const handleHeight = createSlice({
    name: 'HEIGHT',
    initialState,
    reducers: {
        triggerHeight: (state) => {
            state.roll = !state.roll
        }
    }
})

export default handleHeight.reducer

export const { triggerHeight } = handleHeight.actions