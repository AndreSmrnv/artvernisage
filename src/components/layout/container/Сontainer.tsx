import {FC}             from "react";
import cn               from 'classnames';
import {ILayoutProps}   from "../@types";
import  s               from  './Container.module.scss';


export const Container: FC<ILayoutProps> = ({className, children}) => (
    <div className={cn(s.container, className)}>
        {children}
    </div>
);
