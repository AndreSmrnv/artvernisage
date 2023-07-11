import {FC}             from "react";
import { NavLink }      from 'react-router-dom';
import {useSelector}    from "react-redux";
import cn               from 'classnames';
import s                from "../Footer.module.scss";
import {getCategoryPath} from "../../../services/api";


export const NavLinks: FC = () => {
    const { groupList, categories } = useSelector(state => state.navigation);

    return (
        <nav className={s.category}>
            <h2 className={cn(s.title, s.categoryTitle)}>Каталог</h2>
            <ul className={s.categoryList}>
                {groupList.map((groupId) => (
                    <li key={groupId} className={s.categoryItem}>
                        <h3 className={s.categorySubtitle}>
                            <NavLink to={getCategoryPath(groupId)} className={s.link}>
                                {categories[groupId].title}
                            </NavLink>
                        </h3>
                        <ul className={s.categorySublist}>
                            {categories[groupId].list.map(category =>(
                                <li key={category.slug}>
                                    <NavLink
                                        className={s.link}
                                        to={getCategoryPath(groupId, category.slug)}
                                    >
                                        {category.title}
                                    </NavLink>
                                </li>
                            ))}

                        </ul>
                    </li>
                ))}
            </ul>

        </nav>
    );
};
