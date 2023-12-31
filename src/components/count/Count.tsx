import {FC, useEffect, useState} from "react";
import cn                        from 'classnames';
import s                         from './Count.module.scss';

interface ICountProps {
    value: number;
    onChange?: (count: number) => void;
    className?: string;
}

export const Count:FC<ICountProps> = (
    {
        value = 0,
        onChange,
        className = ''
    }
) => {
    const [count, setCount] = useState(value);
    const [disableDecrement, setDisableDecrement] = useState(!!count);

    useEffect(
        () => {
            onChange && onChange(count);
            setDisableDecrement(count < 2)
        },
        [count]
    );

    const handleIncrement = () => setCount( prev => prev + 1 );
    const handleDecrement = () => !disableDecrement && setCount( prev => prev - 1 );

    return (
        <div className={cn(s.count, className)}>
            <button type={'button'}
                    className={cn(s.item, s.btn)}
                    onClick={handleDecrement}
                    disabled={disableDecrement}
            >
                -
            </button>
            <span className={cn(s.item, s.number)} >
                {count}
            </span>
            <button type={'button'}
                    className={cn(s.item, s.btn)}
                    onClick={handleIncrement}
            >
                +
            </button>
        </div>
    )
}