import {FC} from "react";
import {Container} from "../layout/container";
import s from './Footer.module.scss';
import {Social} from "./social";
import {Contacts} from "./contacts";
import {Copyright} from "./copyright";
import {Developments} from "./developments";
import {NavLinks} from "./nav-links";



export const Footer: FC = () => (
    <footer>
        <Container>
            <div className={s.container}>
                <NavLinks />
                <Social />
                <Contacts />
                <Copyright />
                <Developments />
            </div>
        </Container>
    </footer>
);