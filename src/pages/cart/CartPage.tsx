import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchGoods} from "../../services/actions/goodsSlice";
import {Cart} from "../../components/cart";

export const CartPage:FC = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart);

    useEffect(() => {
            const list = cartItems?.map(item => item.id);
            dispatch( fetchGoods( {list} ) );
        },
        [cartItems]
    );

    return (
        <>
            <Cart />
        </>
    )
}