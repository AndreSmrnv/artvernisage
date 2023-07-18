import {createSlice} from "@reduxjs/toolkit";

const favoriteSlice = createSlice ({
    name: 'favorite',
    initialState : {
        goods: [],
        count: 0
    },
    reducers: {
        addIdFavorite: (state, {payload: id}) => {
            !state.goods.includes(id) && state.goods.push(id);
            state.count = state.goods?.length;
        },
        rmIdFavorite: (state, {payload: id}) => {
            const index = state.goods.indexOf(id);
            index !== -1 && state.goods.splice(index, 1);
            state.count = state.goods?.length;
        },
        resetFavorite: (state, action) => {
            state.goods.splice(0,state.goods.length);
            state.count = state.goods?.length;
        },
    },

});

export const {addIdFavorite, rmIdFavorite, resetFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;