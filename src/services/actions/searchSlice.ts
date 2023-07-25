import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice ({
    name: 'search',
    initialState : {
        showPanel: false
    },
    reducers: {
        setShowSearch: (state, {payload}) => {
            state.showPanel = payload;
        },
        toggleSearchVisible: (state) => {
            state.showPanel = !state.showPanel;
        },

    },

});

export const {toggleSearchVisible, setShowSearch} = searchSlice.actions;

export default searchSlice.reducer;