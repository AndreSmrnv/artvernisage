import {FC, useEffect} from "react";
import {RouterProvider,} from 'react-router-dom';
import {router} from "../../services/routes";
import {useDispatch} from "react-redux";
import {fetchNavigation} from "../../services/actions/navigationSlice";


export const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNavigation());
    }, []);

    return <RouterProvider router={router} />
};
