import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const failStatuses = ['rejected'];

export interface ServerState {
    state:    boolean;
    requestStatus: string | null;
}

const initialState: ServerState = {
    state: false,
    requestStatus: null,
};

const serverSlice = createSlice ({
    name: 'server',
    initialState,
    reducers: {
        setServerState: (state, action: PayloadAction<string>) => {
            const {payload: requestStatus} = action;
            state.state = !failStatuses.includes(requestStatus);
            state.requestStatus = requestStatus;
        },

    },

});

export const {setServerState} = serverSlice.actions;

export default serverSlice.reducer;