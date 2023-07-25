import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

type DispatchFunc = () => AppDispatch;

const useDispatch: DispatchFunc = useReduxDispatch;
const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export {
    useDispatch,
    useSelector
}
