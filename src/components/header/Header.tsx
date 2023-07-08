import {FC} from "react";
import {Container} from "../layout";
import {Top} from "./top";
import {Navigation} from "./navigation";


export const Header: FC = () => {
    return (
            <Container>
                <Top />
                <Navigation />
            </Container>
    )
}