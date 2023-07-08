import { Outlet } from 'react-router-dom';
import {Header} from "../../components/header";
import {Main} from "../../components/layout/main";
import {Footer} from "../../components/footer";
import {list} from "../../services/data";




export const HomePage = () => (
    <>
        <Header list={list}/>
        <Main>
            <Outlet />
        </Main>
        <Footer list={list}/>
    </>
)