import { useParams } from 'react-router-dom'
import {Container} from "../../components/layout/container";


export const MainPage = ({gender ='women'}) => {
    const {groupId, categoryId} = useParams();

    return (
        <Container>
            <div>MainPage {groupId}</div>
            {categoryId && <p>Категория: {categoryId}</p>}
        </Container>
    )
};
