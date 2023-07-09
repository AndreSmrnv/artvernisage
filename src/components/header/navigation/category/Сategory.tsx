import {FC} from "react";
import {NavLink, useParams} from 'react-router-dom';
import cn from 'classnames';
import s from "./Category.module.scss";
import {categoriesList} from "../../../../services/data";



export const Category: FC = () => {
    const {groupId} = useParams();
    return (
        <ul className={s.category}>
            {categoriesList.map((item) => (
                <li key={item.slug} className={s.item} >
                    <NavLink
                        className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
                        to={`${groupId}/${item.slug}`}
                    > {item.title}
                    </NavLink>
                </li>
            ))}
        </ul>
        )

}