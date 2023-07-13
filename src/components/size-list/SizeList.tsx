import {FC} from "react";
import s                            from './Size.module.scss';


export const SizeList:FC = ({size: sizeList, activeSize , onChange}) => {

    const onChangeHandler = ({target}) => {
        onChange(target.value);
    } ;

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