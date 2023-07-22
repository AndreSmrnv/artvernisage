import {FC}             from "react";
import cn               from 'classnames';
import  s               from  './Main.module.scss';
import {ILayoutProps}   from "../@types";



export const Main: FC<ILayoutProps> = ({className, children}) => {
    //const {state, requestStatus} = useAppSelector(state => state.server);

    return  (
        <main className={cn(s.main, className)}>
            {children}
        </main>
    );
}
