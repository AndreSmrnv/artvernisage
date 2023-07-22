import {CSSProperties, FC} from "react";
import cn               from 'classnames';
import s from './ColorList.module.scss';
import {useAppSelector} from "../../services/hooks";
import {ColorsState} from "../../services/actions/colorsSlice";

export const getColorById = (id: number, colorList: API.Colors) =>  colorList.find(color => color.id === id);

interface IColorListProps {
    colors: Array<number>;
    activeColor?: number;
    onChange?: (id: number)=>void;
}

export const ColorList: FC<IColorListProps> = ({colors, activeColor= colors[0] , onChange}) => {
    const {colorList: _colorList} = useAppSelector(state => state.colors) as ColorsState;
    const colorList = colors ? _colorList.filter(color => colors.includes(color.id)) : [];

    return (
        <ul className={s.colorList}>
            {   colorList?.map( ({id, code}) =>
                    <li key={id}
                        className={cn(s.color, activeColor === id ? s.colorCheck : '' )}
                        style={{'--data-color': code} as CSSProperties}
                        onClick={() => onChange && onChange(id)}
                    />
                )

            }
        </ul>
    )
}