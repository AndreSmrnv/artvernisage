import { combineReducers }  from '@reduxjs/toolkit';
import navigationReducer    from '../actions/navigationSlice';
import colorsReducer        from '../actions/colorsSlice';


const rootReducer = combineReducers (
    {
        navigation: navigationReducer,
        colors: colorsReducer,
    }
);

export {
    rootReducer
};
