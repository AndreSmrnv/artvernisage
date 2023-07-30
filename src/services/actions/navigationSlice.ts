import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CATEGORIES_URL} from "../api";

export interface NavigationState {
    activeGroup:    string;
    status:         MainTypes.Status;
    categories:     APITypes.Categories;
    groupList:      Array<string>;
    error:          string | null;
}

const initialState: NavigationState = {
    activeGroup: 'women',
    status: 'idle',
    categories: {},
    groupList: [],
    error: null,
};


export const fetchNavigation = createAsyncThunk<APITypes.CategoriesResponse>(
    "navigation/fetchNavigation",
    async () => {
        const url = new URL(CATEGORIES_URL);
        const response = await fetch(url);
        const data: APITypes.CategoriesResponse = await response.json();
        return data;
    }
)

const navigationSlice = createSlice ({
    name: 'navigation',
    initialState ,
    reducers: {
        setActiveGroup: (state, action: PayloadAction<string>) => {
            const { payload } = action;
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
                state.error = action.error?.message ?? null;
            })
    }
});

export const {setActiveGroup} = navigationSlice.actions;

export default navigationSlice.reducer;