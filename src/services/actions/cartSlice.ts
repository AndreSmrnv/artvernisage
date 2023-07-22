import {createSlice} from "@reduxjs/toolkit";

const getItemIdx = (id, items) => items?.findIndex(item => item.id === id);

type TCartItem = {
    id: string
    count: number;
}

export interface CartState {
    cartItems: Array<TCartItem>
    countItems: number;
}

const initialState: CartState = {
    cartItems: [],
    countItems: 0,
};

const cartSlice = createSlice ({
    name: 'cart',
    initialState ,
    reducers: {
        addIdCart: (state, {payload: {id,count}}) => {
            const itemIdx = getItemIdx(id, state.cartItems);
            itemIdx !== -1
                ? state.cartItems[itemIdx].count += count
                : state.cartItems.push({id, count})
            ;
            state.countItems = state.cartItems?.length ?? 0;
        },
        patchIdCart: (state, {payload: {id,count}}) => {
            const itemIdx = getItemIdx(id, state.cartItems);
            if (itemIdx !== -1) {
                state.cartItems[itemIdx].count = count
            }
        },
        rmIdCart: (state, {payload: id}) => {
            const itemIdx = getItemIdx(id, state.cartItems);
            itemIdx !== -1 && state.cartItems.splice(itemIdx, 1);
            state.countItems = state.cartItems?.length ?? 0;
        },
        resetCart: (state, action) => {
            state.cartItems.splice(0,state.cartItems.length);
            state.countItems = 0;
        },
    },

});

export const {addIdCart, rmIdCart, resetCart, patchIdCart} = cartSlice.actions;

export default cartSlice.reducer;