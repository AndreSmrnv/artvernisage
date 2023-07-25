import {FC}                 from "react";
import {useSelector}        from "../../services/hooks";
import {Container}          from "../layout";
import {Top}                from "./top";
import {Navigation}         from "./navigation";
import {Search}             from "../search";
import {useLocationParams}  from "../../services/hooks/useLocationParams";
import s                    from './Header.module.scss';

export const Header:FC = () => {
    const {showPanel} = useSelector(state => state.search);
    const search = useLocationParams('search') ?? '';

    return (
            <Container className={s.container}>
                <Top />
                { (showPanel || search?.length > 0) && <Search />}
                <Navigation />
            </Container>
    )
};
