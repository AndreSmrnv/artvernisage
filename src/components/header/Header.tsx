import {FC}         from "react";
import {useAppSelector} from "../../services/hooks";
import {Container}  from "../layout";
import {Top}        from "./top";
import {Navigation} from "./navigation";
import s            from './Header.module.scss';
import {Search} from "../search";
import {useLocationParams} from "../../services/hooks/useLocationParams";



export const Header:FC = () => {
    const {showPanel} = useAppSelector(state => state.search);
    const search = useLocationParams('search') ?? '';

    return (
            <Container className={s.container}>
                <Top />
                { (showPanel || search?.length > 0) && <Search />}
                <Navigation />
            </Container>
    )
};
