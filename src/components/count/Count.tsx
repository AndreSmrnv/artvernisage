import {FC, useEffect, useState} from "react";
import cn                        from 'classnames';
import s                         from './Count.module.scss';

export const Count:FC = (
    {
        value = 0,
        onChange ,
        className = ''
    }
) => {
    const [count, setCount] = useState(value);
    useEffect( () => {
            onChange(count);
        },
        [count]
    );

    const handleIncrement = () => setCount( prev => prev + 1 );
    const handleDecrement = () => !!count && setCount( prev => prev - 1 );

    return (
        <div className={cn(s.count, className)}>
            <button type={'button'}
                    className={s.item}
                    onClick={handleDecrement}
            >
                -
            </button>
            <span className={cn(s.item, s.number)} >
                {count}
            </span>
            <button type={'button'}
                    className={s.item}
                    onClick={handleIncrement}
            >
                +
            </button>
        </div>
    )
}