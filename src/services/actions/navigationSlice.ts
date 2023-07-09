import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {CATEGORIES_URL} from "../api";



export const fetchNavigation = createAsyncThunk(
    "navigation/fetchNavigation",
    async () => {
        const response = await fetch(CATEGORIES_URL);
        const data = await response.json();
        return data;
    }
)

const navigationSlice = createSlice ({
    name: 'navigation',
    initialState : {
        activeGroup: 'women',
        status: 'idle',
        categories: {},
        groupList: [],
        error: null,
    },
    reducers: {
        setActiveGroup: (state, {payload}) => {
            state.activeGroup = payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNavigation.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNavigation.fulfilled, (state, {payload}) => {
                state.status = 'success';
                state.categories = payload;
                state.groupList = Object.keys(payload);
            })
            .addCase(fetchNavigation.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const {setActiveGroup} = navigationSlice.actions;

export default navigationSlice.reducer;