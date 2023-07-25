import {configureStore} from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';
import {loadReduxState, saveReduxState} from "./fetchState";
import {statusServerMiddleware} from "../middleware/statusServer";


const devTools  = import.meta.env.DEV;
const KEY       = ['favorite', 'cart'];


const store = configureStore(
    {
        reducer: rootReducer,
        devTools,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(statusServerMiddleware),
        preloadedState: loadReduxState(KEY),
    }
);

store.subscribe( ()=>saveReduxState(store.getState(), KEY) );

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;


export default store;