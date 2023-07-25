import {FC}                 from "react";
import {NavLink}            from 'react-router-dom';
import cn                   from 'classnames';
import {getCategoryPath}    from "../../../../services/api";
import {NavigationState}    from "../../../../services/actions/navigationSlice";
import {useSelector}        from "../../../../services/hooks";
import s                    from "./Category.module.scss";



export const Category: FC = () => {
    const { status, activeGroup, groupList, categories } = useSelector(state => state.navigation) as NavigationState;

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
