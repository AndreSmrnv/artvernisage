import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';

const KEY = "favorite";
const  loadState = () => {
    try {
        const serializedState = localStorage.getItem(`redux_${KEY}`);
        if (!serializedState) return undefined;
        return {[KEY]: JSON.parse(serializedState)};
    } catch (e) {
        return undefined;
    }
}

const saveState = (store)=> localStorage.setItem(`redux_${KEY}`, JSON.stringify(store[KEY]));



const store = configureStore({
    reducer: rootReducer,
    devTools: import.meta.env.DEV,
    preloadedState: loadState(),
})

store.subscribe( ()=>saveState(store.getState()))


export default store;