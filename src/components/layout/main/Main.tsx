import {FC} from "react";
import {useSelector} from "react-redux";
import cn  from 'classnames';
import  s  from  './Main.module.scss';


export const Main: FC = ({className, children}) => {
    const {state, requestStatus} = useSelector(state => state.server);
    console.debug('Main', {state, requestStatus})

    return  (
        <main className={cn(s.main, className)}>
            {children}
        </main>
    );
}
