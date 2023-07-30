/**
 * Main types
 * @namespace  MainTypes

 * */

namespace MainTypes {


    export type strNumber = string | number;

    export interface Action {
        type: any;
    }

    export type Reducer<S> = <A extends Action>(state: S, action: A) => S;

    export type Status = 'idle' | 'loading' | 'success' | 'failed';
}