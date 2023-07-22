import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { Middleware } from 'redux'
import { rootReducer } from '../reducers';
import {loadReduxState, saveReduxState} from "./fetchState";
import {setServerState} from "../actions/serverSlice";

const devTools  = import.meta.env.DEV;
const KEY       = ['favorite', 'cart'];

const statusServerMiddleware: Middleware<NonNullable<unknown>, RootState> = (store) => (next) => (action) => {
    const {requestStatus} = action?.meta ?? {};
    requestStatus && store.dispatch(setServerState(requestStatus))
    //console.debug('statusServerMiddleware',{requestStatus, action})
    return next(action)
};

const store = configureStore(
    {
        reducer: rootReducer,
        devTools,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(statusServerMiddleware),
        preloadedState: loadReduxState(KEY),
    }
);

store.subscribe( ()=>saveReduxState(store.getState(), KEY) );

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;