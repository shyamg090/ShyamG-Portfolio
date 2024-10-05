import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
    name : "theme",
    initialState : {
        mode : 'lightmode'
    },
    reducers : {
        changetheme(state){
            state.mode = state.mode === 'lightmode' ? 'darkmode' : 'lightmode';
        }
    }

})

export const { changetheme } = themeSlice.actions;
export default themeSlice.reducer;