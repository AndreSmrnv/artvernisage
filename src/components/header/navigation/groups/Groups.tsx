import {FC}                 from "react";
import {NavLink}            from 'react-router-dom';
import cn                   from 'classnames';
import {getCategoryPath}    from "../../../../services/api";
import {NavigationState}    from "../../../../services/actions/navigationSlice";
import {useSelector}        from "../../../../services/hooks";
import s                    from "./Groups.module.scss";


export const Groups: FC = () => {
    const { activeGroup, groupList, categories } = useSelector(state => state.navigation) as NavigationState;

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
};
