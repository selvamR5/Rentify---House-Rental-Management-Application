import { createSlice } from "@reduxjs/toolkit";

export const userIdSlice = createSlice({
    name: "userId",
    initialState: {
        value: ""
    },
    reducers:{
        change: (state, action) => {
            state.value = action.payload;
        },
        setDefault: (state) => {
            state.value = "";
        }
    }
});

export const {change, setDefault} = userIdSlice.actions;

export default userIdSlice.reducer;