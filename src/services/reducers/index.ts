import { combineReducers }  from '@reduxjs/toolkit';
import navigationReducer    from '../actions/navigationSlice';
import colorsReducer        from '../actions/colorsSlice';
import goodsReducer        from '../actions/goodsSlice';
import productReducer        from '../actions/productSlice';


const rootReducer = combineReducers (
    {
        navigation: navigationReducer,
        colors:     colorsReducer,
        goods:      goodsReducer,
        product:    productReducer,
    }
);

export {
    rootReducer
};
