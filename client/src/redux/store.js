import { configureStore } from '@reduxjs/toolkit';
import userIdReducer from "./userId"
import modalShowReducer from "./modalShow"
import formReducer from "./form"

export default configureStore({
    reducer: {
        userId: userIdReducer,
        modalShow: modalShowReducer,
        formType: formReducer,
    }
})
