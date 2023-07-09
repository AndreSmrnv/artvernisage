import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {COLORS_URL} from "../api";



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
    initialState : {
        status: 'idle',
        colorList: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchColors.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchColors.fulfilled, (state, {payload}) => {
                state.status = 'success';
                state.categories = payload;
                state.groupList = Object.keys(payload);
            })
            .addCase(fetchColors.rejected, (state, action) => {
                state.status = 'failed';
                state.categories = action.error.message;
            })
    }
});


export default colorsSlice.reducer;