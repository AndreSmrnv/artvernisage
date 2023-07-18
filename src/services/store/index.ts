import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';
import {loadReduxState, saveReduxState} from "./fetchState";
import {setServerState} from "../actions/serverSlice";

const devTools  = import.meta.env.DEV;
const KEY       = ['favorite', 'cart'];

const statusServerMiddleware = (store) => (next) => (action) => {
    const {requestStatus} = action?.meta ?? {};
    //store.dispatch(setServerState(requestStatus))
    console.debug('statusServerMiddleware',{requestStatus, action})
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


export default store;