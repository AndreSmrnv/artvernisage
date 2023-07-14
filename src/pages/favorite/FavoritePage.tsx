import {FC, useEffect} from "react";
import {fetchGoods} from "../../services/actions/goodsSlice";
import {useDispatch, useSelector} from "react-redux";
import {Goods} from "../../components/goods";

export const FavoritePage:FC = () => {
    const dispatch = useDispatch();
    const { status, goods: list } = useSelector(state => state.favorite);


    useEffect(() => {
        dispatch( fetchGoods( {list} ) );
    }, [list]);

    return (
        <Goods title={'Избранное'} />
    )
}