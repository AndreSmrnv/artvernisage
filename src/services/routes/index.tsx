import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import {HomePage}       from "../../pages/home";
import {MainPage}       from "../../pages/main";
import {ErrorPage}      from "../../pages/error";
import {ProductPage}    from "../../pages/product";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<HomePage/>}>
            <Route index element={<MainPage/>}/>
            <Route path='/product/:productId' element={<ProductPage />}/>
            <Route path='/catalog/:groupId/' element={<MainPage />}/>
            <Route path='/catalog/:groupId/:categoryId' element={<MainPage />}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Route>
    )
);