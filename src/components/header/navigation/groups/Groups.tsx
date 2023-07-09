import {FC} from "react";
import {NavLink, useParams} from 'react-router-dom';
import cn from 'classnames';
import s from "./Groups.module.scss";
import {list} from "../../../../services/data";

export const Groups: FC = () => {
    const {groupId} = useParams();
    const genderList = ['women', 'men'];
    const categories = list;

     return (
         <ul className={s.groups}>
             {genderList?.map((gender) => (
                 <li key={gender} className={s.item}>
                     <NavLink
                         className= {({isActive}) =>
                             cn(s.link, (isActive || gender === groupId) && s.linkActive)}
                         to={gender}>{gender}
                     </NavLink>
                 </li>
             ))}
         </ul>
     )
}