import {FC, useEffect}      from "react";
import {RouterProvider}     from 'react-router-dom';
import {useDispatch}        from "react-redux";
import {router}             from "../../services/routes";
import {fetchNavigation}    from "../../services/actions/navigationSlice";
import {fetchGoods}         from "../../services/actions/goodsSlice";
import {fetchColors}        from "../../services/actions/colorsSlice";


export const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNavigation());
        dispatch(fetchColors());

    }, []);

    return <RouterProvider router={router} />
};
