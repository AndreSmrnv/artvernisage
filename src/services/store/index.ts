import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';


const store = configureStore({
    reducer: rootReducer,
    devTools: import.meta.env.DEV,
})

export default store;