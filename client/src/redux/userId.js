import { createSlice } from "@reduxjs/toolkit";

export const userIdSlice = createSlice({
    name: "userId",
    initialState: {
        value: localStorage.getItem('userId')
    },
    reducers:{
        changeUserId: (state, action) => {
            state.value = action.payload;
        },
        setDefault: (state) => {
            state.value = "";
        }
    }
});

export const {changeUserId, setDefault} = userIdSlice.actions;

export default userIdSlice.reducer;