import {configureStore} from "@reduxjs/toolkit";
import OpenCloseFormSlice from "./slices/openCloseFormSlice";


const store = configureStore({
    reducer:{
        closeOpenForm: OpenCloseFormSlice.reducer,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;