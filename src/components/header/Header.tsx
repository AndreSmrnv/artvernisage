import {FC}         from "react";
import {Container}  from "../layout";
import {Top}        from "./top";
import {Navigation} from "./navigation";
import s            from './Header.module.scss';


export const Header:FC = () => {
    return (
            <Container className={s.container}>
                <Top />
                <Navigation />
            </Container>
    )
};
