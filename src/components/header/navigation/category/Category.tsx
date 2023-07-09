import {FC} from "react";
import {NavLink, useParams} from 'react-router-dom';
import cn from 'classnames';
import s from "./Category.module.scss";

import {useSelector} from "react-redux";



export const Category: FC = () => {
    const { status, activeGroup, groupList, categories } = useSelector(state => state.navigation);


    return (
        <ul className={s.category}>
            { status === 'success' && groupList.includes(activeGroup) &&
                categories[activeGroup].list.map(
                    (item) => (
                        <li key={item.slug} className={s.item} >
                            <NavLink
                                className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
                                to={`${activeGroup}/${item.slug}`}
                            > {item.title}
                            </NavLink>
                        </li>
                    )
                )
            }
        </ul>
    )

}