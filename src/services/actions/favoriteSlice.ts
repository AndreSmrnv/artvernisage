import {createSlice} from "@reduxjs/toolkit";

const favoriteSlice =
    createSlice ({
    name: 'favorite',
    initialState : {
        goods: []
    },
    reducers: {
        addIdFavorite: ({goods}, {payload:{id}}) => {
            !goods.includes(id) && goods.push(id)
        },
        rmIdFavorite: ({goods}, {payload:{id}}) => {
            const index = goods.indexOf(id);
            index !== -1 && goods.splice(index, 1);
        },
    },

});


export default favoriteSlice.reducer;