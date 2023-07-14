import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import {HomePage}       from "../../pages/home";
import {MainPage}       from "../../pages/main";
import {ErrorPage}      from "../../pages/error";
import {ProductPage}    from "../../pages/product";
import {CartPage}       from "../../pages/cart";
import {FavoritePage}   from "../../pages/favorite";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<HomePage/>}>
            <Route index element={<MainPage/>}/>
            <Route path='/cart' element={<CartPage />}/>
            <Route path='/favorite' element={<FavoritePage />}/>
            <Route path='/product/:productId' element={<ProductPage />}/>
            <Route path='/catalog/:groupId/' element={<MainPage />}/>
            <Route path='/catalog/:groupId/:categoryId' element={<MainPage />}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Route>
    )
);