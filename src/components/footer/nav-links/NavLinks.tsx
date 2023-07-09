import {FC}             from "react";
import { NavLink }      from 'react-router-dom';
import {useSelector}    from "react-redux";
import cn               from 'classnames';
import s                from "../Footer.module.scss";


export const NavLinks: FC = () => {
    const { groupList, categories } = useSelector(state => state.navigation);

    return (
        <nav className={s.category}>
            <h2 className={cn(s.title, s.categoryTitle)}>Каталог</h2>
            <ul className={s.categoryList}>
                {groupList.map((group) => (
                    <li key={group} className={s.categoryItem}>
                        <h3 className={s.categorySubtitle}>
                            <NavLink to={group} className={s.link}>{categories[group].title}</NavLink>
                        </h3>
                        <ul className={s.categorySublist}>
                            {categories[group].list.map(category =>(
                                <li key={category.slug}>
                                    <NavLink
                                        className={s.link}
                                        to={`${group}/${category.slug}`}
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
