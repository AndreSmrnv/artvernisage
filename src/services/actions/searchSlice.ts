import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice ({
    name: 'search',
    initialState : {
        opened: false
    },
    reducers: {
        setOpenState: (state, {payload}) => {
            state.opened = payload;
        },
        toogleSearchVisible: (state, action) => {
            state.opened = !state.opened;
        },

    },

});

export const {toogleSearchVisible, setOpenState} = searchSlice.actions;

export default searchSlice.reducer;