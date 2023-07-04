import {FC} from "react";
import clN  from 'classnames';
import      './Container.module.scss';

export const Container: FC = ({className, children}) => (
    <div className={clN('container', className)}>
        {children}
    </div>
)