import {setServerState} from "../actions/serverSlice";
// @ts-ignore
export const statusServerMiddleware = (store) => (next) => (action) => {
    const {requestStatus} = action?.meta ?? {};
    requestStatus && store.dispatch(setServerState(requestStatus))
    //console.debug('statusServerMiddleware',{requestStatus, action})
    return next(action)
};