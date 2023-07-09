import {FC}             from "react";
import {useSelector}    from "react-redux";
import {NavLink}        from 'react-router-dom';
import cn               from 'classnames';
import s                from "./Groups.module.scss";


export const Groups: FC = () => {
    const { activeGroup, groupList, categories } = useSelector(state => state.navigation);

     return (
         <ul className={s.groups}>
             {groupList?.map((group) => (
                 <li key={group} className={s.item}>
                     <NavLink
                         className= {({isActive}) =>
                             cn(s.link, (isActive || group === activeGroup) && s.linkActive)}
                         to={group}>{categories[group].title}
                     </NavLink>
                 </li>
             ))}
         </ul>
     )
}