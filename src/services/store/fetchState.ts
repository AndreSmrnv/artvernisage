const  loadReduxState = (key = '') => {
    try {
        const serializedState = localStorage.getItem(`redux_${key}`);
        return serializedState ? {[key]: JSON.parse(serializedState)} : void(0);
    } catch (e) {
        return void(0);
    }
};

const saveReduxState = (store, key = '') =>
    localStorage.setItem(`redux_${key}`, JSON.stringify(store[key]))
;

export {
    loadReduxState,
    saveReduxState,
};
