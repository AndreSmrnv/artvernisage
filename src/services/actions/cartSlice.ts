import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: 'cart',
    initialState : {
        cartItems: [],
        countItems: 0,
    },
    reducers: {
        addIdCart: (state, {payload: {id,count}}) => {
            const itemIdx = state.cartItems.findIndex(item => item.id === id);
            itemIdx !== -1
                ? state.cartItems[itemIdx].count += count
                : state.cartItems.push({id, count})
            ;
            state.countItems = state.cartItems?.length ?? 0;
        },
        rmIdCart: (state, {payload: id}) => {
            const itemIdx = state.cartItems.findIndex(item => item.id === id);
            itemIdx !== -1 && state.cartItems.splice(itemIdx, 1);
            state.countItems = state.cartItems?.length ?? 0;
        },
        resetCart: (state, action) => {
            state.cartItems.splice(0,state.cartItems.length);
            state.countItems = 0;
        },
    },

});

export const {addIdCart, rmIdCart, resetCart} = cartSlice.actions;

export default cartSlice.reducer;