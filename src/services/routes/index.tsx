import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import {HomePage} from "../../pages/home";
import {MainPage} from "../../pages/main";
import {ErrorPage} from "../../pages/error";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<HomePage/>}>
            <Route index element={<MainPage/>}/>
            <Route path='women' element={<MainPage gender="women"/>}/>
            <Route path='men' element={<MainPage gender="men"/>}/>
            <Route path='kids' element={<MainPage gender="kids"/>}/>
            <Route path='women/:category' element={<MainPage gender="women"/>}/>
            <Route path='men/:category' element={<MainPage gender="men"/>}/>
            <Route path='kids/:category' element={<MainPage gender="kids"/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Route>
    )
);