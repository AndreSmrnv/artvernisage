import {FC} from "react";
import {Container} from "../layout/container";

interface IInfoMsgProps{
    message: string
}

export const InfoMsg:FC<IInfoMsgProps> = ({message = ''}) => (
    <Container>
        <p> {message} </p>
    </Container>
)