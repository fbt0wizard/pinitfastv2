import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'light'
}

const ThemeSlice = createSlice({
    name: 'THEMES',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            if(state.theme === 'dark') {
                state.theme = 'light'
            }else {
                state.theme = 'dark'
            }
        }
    }
})

export default ThemeSlice.reducer;
export const { toggleTheme } = ThemeSlice.actions;