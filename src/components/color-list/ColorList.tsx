import {FC} from "react";
import {useSelector} from "react-redux";
import s from './ColorList.module.scss'

export const ColorList: FC = ({colors}) => {
    const {colorList: _colorList} = useSelector(state => state.colors);
    const colorList = _colorList.filter(color => colors.includes(color.id));

    return (
        <ul className={s.colorList}>
            {   colorList?.map( color =>
                    <li>
                        {color.id}
                    </li>
                )

            }
        </ul>
    )
}