const  loadReduxState = (keys = []) => {
    const localState = {};
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

const saveReduxState = (store, keys = []) =>
    keys.forEach(
        key => localStorage.setItem(`redux_${key}`, JSON.stringify(store[key]))
    )
;

export {
    loadReduxState,
    saveReduxState,
};
