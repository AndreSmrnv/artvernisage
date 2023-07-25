import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {GOODS_URL} from "../api";

export interface GoodsState {
    status:       'idle' | 'loading' | 'success' | 'failed';
    goodList:     API.Goods;
    error:        string | null;
}

const initialState: GoodsState = {
    status: 'idle',
    goodList: {
        goods: [],
        page: 0,
        pages: 0,
        totalCount: 0,
    },
    error: null,
};

export const fetchGoods = createAsyncThunk(
    "goods/fetchGoods",
    async (searchParams: API.SearchParams) => {
        const url = new URL(GOODS_URL);
        Object.entries(searchParams).forEach( param => param[1] && url.searchParams.append(...param) );

        const response = await fetch(url);
        const data: API.GoodsResponse = await response.json();

        //console.debug("goods/fetchGoods", {data})

        return data;
    }
)

const goodsSlice = createSlice ({
    name: 'goods',
    initialState ,
    reducers: {
        setCurrentPage: (state, {payload}) => {
            state.goodList.page = payload;
        }
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
                state.error = action.error?.message ?? null;
            })
    }
});

export const {setCurrentPage} = goodsSlice.actions;

export default goodsSlice.reducer;