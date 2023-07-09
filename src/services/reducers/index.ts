import { combineReducers } from '@reduxjs/toolkit';
import navigationReducer from '../features/NavigationSlice';


const rootReducer = combineReducers (
    {
        navigation: navigationReducer,
    }
);

export {
    rootReducer
}