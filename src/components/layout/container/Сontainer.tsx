import {FC} from "react";
import cn  from 'classnames';
import  s  from  './Container.module.scss';

export const Container: FC = ({className, children}) => (
    <div className={cn(s.container, className)}>
        {children}
    </div>
)