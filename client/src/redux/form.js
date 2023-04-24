import { createSlice } from "@reduxjs/toolkit";

export const formTypeSlice = createSlice({
    name: "formType",
    initialState: {
        value: "Login"
    },
    reducers:{
        FormType: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {FormType} = formTypeSlice.actions;

export default formTypeSlice.reducer;