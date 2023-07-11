import {FC}             from "react";
import {useSelector}    from "react-redux";
import {NavLink}        from 'react-router-dom';
import cn               from 'classnames';
import s                from "./Category.module.scss";
import {getCategoryPath} from "../../../../services/api";


export const Category: FC = () => {
    const { status, activeGroup, groupList, categories } = useSelector(state => state.navigation);

    return (
        <ul className={s.category}>
            { status === 'success' && groupList.includes(activeGroup) &&
                categories[activeGroup].list.map(
                    (category) => (
                        <li key={category.slug} className={s.item} >
                            <NavLink
                                className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
                                to={ getCategoryPath(activeGroup, category.slug) }
                            >
                                {category.title}
                            </NavLink>
                        </li>
                    )
                )
            }
        </ul>
    )
};
