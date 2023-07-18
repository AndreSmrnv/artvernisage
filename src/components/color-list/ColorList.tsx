import {FC} from "react";
import {useSelector} from "react-redux";
import cn               from 'classnames';
import s from './ColorList.module.scss'

export const ColorList: FC = ({colors, activeColor, onChange = (id) => void(0)}) => {
    const {colorList: _colorList} = useSelector(state => state.colors);
    const colorList = colors ? _colorList.filter(color => colors.includes(color.id)) : [];

    return (
        <ul className={s.colorList}>
            {   colorList?.map( ({id, code}) =>
                    <li key={id}
                        className={cn(s.color, activeColor === id ? s.colorCheck : '' )}
                        style={{'--data-color': code}}
                        onClick={() => onChange(id)}
                    />
                )

            }
        </ul>
    )
}