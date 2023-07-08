import {FC} from "react";
import {Home} from "../../pages/home/Home";
import { Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements }
    from 'react-router-dom';
import { MainPage } from './Components/MainPage/MainPage.jsx';
import { Root } from './routes/Root.jsx';
import { ErrorPage } from './Components/ErrorPage/ErrorPage.jsx';

export const App: FC = () => {

    return (
        <Home />
    )
}