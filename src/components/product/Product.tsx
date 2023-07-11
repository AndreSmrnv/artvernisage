import {FC} from "react";
import s from './Product.module.scss'
import {NavLink} from "react-router-dom";
import {getPicPath} from "../../services/api";
import {HeartIcon} from "../icons";
import {ColorList} from "../color-list";

export const Product: FC = (
    {
        id,
        pic,
        title,
        price,
        colors
    }
) => (
    <li className={s.product}>
        <NavLink  className={s.link}
                  to={`product/${id}`}
        >
            <img className={s.image} src={getPicPath(pic)}/>
            <h3 className={s.title}>{title}</h3>
        </NavLink>
        <div className={s.row}>
            <p className={s.price}>
                &#8381; {price}
            </p>
            <button>
                <HeartIcon />
            </button>
        </div>
        <ColorList colors={colors}/>
    </li>
);