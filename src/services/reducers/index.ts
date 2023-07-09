import { combineReducers }  from '@reduxjs/toolkit';
import navigationReducer    from '../actions/navigationSlice';
import colorsReducer        from '../actions/colorsSlice';
import goodsReducer        from '../actions/goodsSlice';


const rootReducer = combineReducers (
    {
        navigation: navigationReducer,
        colors:     colorsReducer,
        goods:      goodsReducer,
    }
);

export {
    rootReducer
};
