import { configureStore } from '@reduxjs/toolkit';
import userIdReducer from "./userId"

export default configureStore({
    reducer: {
        userId: userIdReducer,
    }
})
