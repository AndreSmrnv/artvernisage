type TStore = {
    [k: string]:  any
};

const  loadReduxState = (keys: Array<string> = []) => {
    const localState = {} as TStore;
    keys.forEach(
            key => {
                try {
                    const serializedState = localStorage.getItem(`redux_${key}`);
                    if (serializedState) {
                        localState[key]= JSON.parse(serializedState)
                    }
                } catch (e) {
                    return void(0);
                }
            }

        )
    return localState
};

const saveReduxState = (store: TStore, keys: Array<string> = []) =>
    keys.forEach(
        key => localStorage.setItem(`redux_${key}`, JSON.stringify(store[key]))
    )
;

export {
    loadReduxState,
    saveReduxState,
};
