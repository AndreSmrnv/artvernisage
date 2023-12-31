import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {GOODS_URL} from "../api";

export interface ProductState {
    status:       MainTypes.Status;
    product:      APITypes.Good ;
    error:        string | null;
}

const initialState = {
    status: 'idle',
    product: {},
    error: null,
} as  ProductState;

export const fetchProduct  = createAsyncThunk(
    "product/fetchProduct",
    async (id: string) => {
        const url = new URL(`${GOODS_URL}/${id}`);

        const response = await fetch(url);
        const data: APITypes.ProductResponse = await response.json();
        return data;
    }
)

const productSlice = createSlice ({
    name: 'product',
    initialState ,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProduct.fulfilled, (state, {payload}) => {
                state.status = 'success';
                state.product = payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error?.message ?? null;
            })
    }
});


export default productSlice.reducer;