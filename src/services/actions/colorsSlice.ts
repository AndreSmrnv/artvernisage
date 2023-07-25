import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {COLORS_URL} from "../api";

export interface ColorsState {
    status:         'idle' | 'loading' | 'success' | 'failed';
    colorList: Array<API.Color>
    error:          string | null;
}

const initialState: ColorsState = {
    status: 'idle',
    colorList: [],
    error: null,
};

export const fetchColors = createAsyncThunk(
    "colors/fetchColors",
    async () => {
        const response = await fetch(COLORS_URL);
        const data = await response.json();
        return data;
    }
)

const colorsSlice = createSlice ({
    name: 'colors',
    initialState ,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchColors.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchColors.fulfilled, (state, {payload}) => {
                state.status = 'success';
                state.colorList = payload;
            })
            .addCase(fetchColors.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error?.message ?? null;
            })
    }
});


export default colorsSlice.reducer;