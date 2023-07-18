import {FC}         from "react";
import {Container}  from "../layout";
import {Top}        from "./top";
import {Navigation} from "./navigation";
import s            from './Header.module.scss';
import {Search} from "../search";
import {useSelector} from "react-redux";
import {useLocationParams} from "../../services/hooks/useLocationParams";


export const Header:FC = () => {
    const {opened} = useSelector(state => state.search);
    const search = useLocationParams('search');

    return (
            <Container className={s.container}>
                <Top />
                { (opened || search?.length > 0)&&
                    <Search />
                }
                <Navigation />
            </Container>
    )
};
