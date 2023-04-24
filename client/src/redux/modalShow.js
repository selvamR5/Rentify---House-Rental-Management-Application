import { createSlice } from "@reduxjs/toolkit";

export const modalShowSlice = createSlice({
    name: "modalShow",
    initialState: {
        value: false
    },
    reducers:{
        toggleModal: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {toggleModal} = modalShowSlice.actions;

export default modalShowSlice.reducer;