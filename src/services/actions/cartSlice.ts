import {createSlice} from "@reduxjs/toolkit";

const getItemIdx = (id: string, items: Array<TCartItem>) => items?.findIndex(item => item.id === id);

type TCartItem = {
    id:         string
    count:      number;
    price:      number;
    colorId:    number
    size:       string;
}

export interface CartState {
    cartItems:  Array<TCartItem>
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
        addIdCart: (state, {payload}) => {
            const {id} = payload;
            const itemIdx = getItemIdx(id, state.cartItems);
            if (itemIdx === -1) {
                state.cartItems.push({...payload});
                state.countItems = state.cartItems?.length ?? 0;
            }
        },
        patchIdCart: (state, {payload}) => {
            const {id,count} = payload;
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
        resetCart: (state) => {
            state.cartItems.splice(0,state.cartItems.length);
            state.countItems = 0;
        },
    },

});

export const {addIdCart, rmIdCart, resetCart, patchIdCart} = cartSlice.actions;

export default cartSlice.reducer;