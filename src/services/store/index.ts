import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';
import {loadReduxState, saveReduxState} from "./fetchState";

const devTools  = import.meta.env.DEV;
const KEY       = ['favorite', 'cart'];


const store = configureStore(
    {
        reducer: rootReducer,
        devTools,
        preloadedState: loadReduxState(KEY),
    }
);

store.subscribe( ()=>saveReduxState(store.getState(), KEY) );


export default store;