import {FC, useEffect}      from "react";
import {RouterProvider}     from 'react-router-dom';
import {router}             from "../../services/routes";
import {fetchNavigation}    from "../../services/actions/navigationSlice";
import {fetchColors}        from "../../services/actions/colorsSlice";
import {useDispatch}        from "../../services/hooks";


export const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(fetchNavigation());
            dispatch(fetchColors());
        }, 
        []
    );

    return <RouterProvider router={router} />
};
