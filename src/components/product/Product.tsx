import {FC}                         from "react";
import {NavLink}                    from "react-router-dom";
import {HeartIcon}                  from "../icons";
import {ColorList}                  from "../color-list";
import {getPicPath, getProductPath} from "../../services/api";
import s                            from './Product.module.scss';

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
                  to={getProductPath(id)}
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