import { Outlet }   from 'react-router-dom';
import {Header}     from "../../components/header";
import {Main}       from "../../components/layout/main";
import {Footer}     from "../../components/footer";

export const HomePage = () => (
    <>
        <Header />
        <Main>
            <Outlet />
        </Main>
        <Footer />
    </>
)