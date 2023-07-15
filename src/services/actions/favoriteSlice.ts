import {createSlice} from "@reduxjs/toolkit";

const favoriteSlice = createSlice ({
    name: 'favorite',
    initialState : {
        goods: []
    },
    reducers: {
        addIdFavorite: (state, {payload: id}) => {
            !state.goods.includes(id) && state.goods.push(id)
        },
        rmIdFavorite: (state, {payload: id}) => {
            const index = state.goods.indexOf(id);
            index !== -1 && state.goods.splice(index, 1);
        },
        resetFavorite: (state, action) => {
            state.goods.splice(0,state.goods.length)
        },
    },

});

export const {addIdFavorite, rmIdFavorite, resetFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;