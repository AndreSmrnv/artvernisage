import {FC, useEffect}  from "react";
import {useParams}      from 'react-router-dom';
import {setActiveGroup} from "../../../services/actions/navigationSlice";
import {useDispatch}    from "../../../services/hooks";
import {Container}      from "../../layout/container";
import {Category}       from "./category";
import {Groups}         from "./groups";
import s                from "./Navigation.module.scss";



export const Navigation: FC = () => {
    const dispatch              = useDispatch();
    const { groupId = 'women' } = useParams();

    useEffect(() => {
        dispatch(setActiveGroup(groupId));
    }, [groupId]);

    return (
        <nav className={s.navigation}>
            <Container>
                <Groups />
                <Category />
            </Container>
        </nav>
    )
}