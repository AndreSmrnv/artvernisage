import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice ({
    name: 'search',
    initialState : {
        showPanel: false
    },
    reducers: {
        setShowSearch: (state, {payload}) => {
            state.opened = payload;
        },
        toggleSearchVisible: (state, action) => {
            state.opened = !state.opened;
        },

    },

});

export const {toggleSearchVisible, setShowSearch} = searchSlice.actions;

export default searchSlice.reducer;