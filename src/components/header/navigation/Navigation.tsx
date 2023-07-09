import {FC, useEffect}  from "react";
import {useDispatch}    from "react-redux";
import {useParams}      from 'react-router-dom';
import {Container} from "../../layout/container";
import {Category} from "./category";
import {Groups} from "./groups";
import s from "./Navigation.module.scss";
import {setActiveGroup} from "../../../services/actions/NavigationSlice";


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