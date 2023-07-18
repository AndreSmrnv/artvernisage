import {createSlice} from "@reduxjs/toolkit";

const failStatuses = ['rejected'];

const serverSlice = createSlice ({
    name: 'server',
    initialState : {
        state: false,
        requestStatus: null,
    },
    reducers: {
        setServerState: (state, {payload: requestStatus}) => {
            state.state = !failStatuses.includes(requestStatus);
            state.requestStatus = requestStatus;
        },

    },

});

export const {setServerState} = serverSlice.actions;

export default serverSlice.reducer;