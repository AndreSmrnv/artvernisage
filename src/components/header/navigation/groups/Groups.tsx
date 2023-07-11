import {FC}             from "react";
import {useSelector}    from "react-redux";
import {NavLink}        from 'react-router-dom';
import cn               from 'classnames';
import s                from "./Groups.module.scss";
import {getCategoryPath} from "../../../../services/api";


export const Groups: FC = () => {
    const { activeGroup, groupList, categories } = useSelector(state => state.navigation);

     return (
         <ul className={s.groups}>
             {groupList?.map((groupId) => (
                 <li key={groupId} className={s.item}>
                     <NavLink
                         className= {({isActive}) =>
                             cn(s.link, (isActive || groupId === activeGroup) && s.linkActive)}
                         to={getCategoryPath(groupId)}
                     >
                         {categories[groupId].title}
                     </NavLink>
                 </li>
             ))}
         </ul>
     )
}