import {ChangeEvent, FC} from "react";
import s                            from './Size.module.scss';

interface ISizeListProps {
    size: API.SizeList,
    activeSize: string;
    onChange: (value: string)=>void;
}
export const SizeList:FC<ISizeListProps> = ({size: sizeList, activeSize , onChange}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const next = e.target.value;
        onChange(next);
    };

    return (
        <div className={s.size} >
            <p className={s.title}> Размер </p>
            <div className={s.list}>
                {
                    sizeList?.map( (size) => (
                            <label className={s.item} key={size}>
                                <input type={'radio'}
                                       className={s.input}
                                       name={'size'}
                                       value={size}
                                       checked={size === activeSize}
                                       onChange={onChangeHandler}
                                />
                                <span className={s.check}>{size}</span>
                            </label>
                        )
                    )

                }
            </div>

        </div>
    )
}