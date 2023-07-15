import {FC} from "react";
import {Container} from "../layout/container";

export const InfoMsg:FC = ({message = ''}) => (
    <Container>
        <p> {message} </p>
    </Container>
)