import {FC} from "react";
import cn  from 'classnames';
import  s  from  './Main.module.scss';

export const Main: FC = ({className, children}) => (
    <main className={cn(s.main, className)}>
        {children}
    </main>
)