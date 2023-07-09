import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {GOODS_URL} from "../api";



export const fetchGoods = createAsyncThunk(
    "goods/fetchGoods",
    async (group) => {
        const response = await fetch(`${GOODS_URL}?gender=${group}`);
        const data = await response.json();
        return data;
    }
)

const goodsSlice = createSlice ({
    name: 'goods',
    initialState : {
        status: 'idle',
        goodList: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGoods.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGoods.fulfilled, (state, {payload}) => {
                state.status = 'success';
                state.goodList = payload;
            })
            .addCase(fetchGoods.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});


export default goodsSlice.reducer;