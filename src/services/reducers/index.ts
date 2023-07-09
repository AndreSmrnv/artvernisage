import { combineReducers } from '@reduxjs/toolkit';
import navigationReducer from '../actions/NavigationSlice';


const rootReducer = combineReducers (
    {
        navigation: navigationReducer,
    }
);

export {
    rootReducer
}