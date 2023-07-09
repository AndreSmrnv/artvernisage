import {FC} from "react";
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import {list} from "../../../services/data";
import s from "../Footer.module.scss";




export const NavLinks: FC = () => (
    <nav className={s.category}>
        <h2 className={cn(s.title, s.categoryTitle)}>Каталог</h2>
        <ul className={s.categoryList}>
            {list.map((item) => (
                <li key={item.link} className={s.categoryItem}>
                    <h3 className={s.categorySubtitle}>
                        <NavLink to={item.link} className={s.link}>{item.title}</NavLink>
                    </h3>
                    <ul className={s.categorySublist}>
                        {item.categories.map(category =>(
                            <li key={category.link}>
                                <NavLink
                                    className={s.link}
                                    to={`${item.link}/${category.link}`}
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