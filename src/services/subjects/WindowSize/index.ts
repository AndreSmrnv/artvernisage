import { BehaviorSubject, fromEvent }   from "rxjs";
import { useBehaviorSubject }           from "../useBehaviorSubject";

type WindowSize = {
    width:  number;
    height: number;
};

const windowResize$ = fromEvent(window, 'resize');

const getWindowSize = (): WindowSize => ({
    width:  window.innerWidth,
    height: window.innerHeight,
});

const windowSize$ = new BehaviorSubject<WindowSize>(getWindowSize());

windowResize$.subscribe(() => windowSize$.next(getWindowSize()));

const useWindowSize = () => useBehaviorSubject(windowSize$);

export {useWindowSize};