const  loadReduxState = (key = '') => {
    try {
        const serializedState = localStorage.getItem(`redux_${key}`);
        return serializedState ? {[key]: JSON.parse(serializedState)} : undefined;
    } catch (e) {
        return undefined;
    }
};

const saveReduxState = (store, key = '') =>
    localStorage.setItem(`redux_${key}`, JSON.stringify(store[key]))
;

export {
    loadReduxState,
    saveReduxState,
};
