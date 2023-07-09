import {FC} from "react";
import {Container} from "../../layout/container";
import {Category} from "./category/Сategory";
import {Groups} from "./groups/Groups";
import s from "./Navigation.module.scss";

export const Navigation: FC = () => {

    return (
        <nav className={s.navigation}>
            <Container>
                <Groups />
                <Category />
            </Container>
        </nav>
    )
}