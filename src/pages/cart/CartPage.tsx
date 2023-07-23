import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../services/hooks";
import {fetchGoods} from "../../services/actions/goodsSlice";
import {Cart} from "../../components/cart";
import {Order} from "../../components/order";
import {CartState} from "../../services/actions/cartSlice";


export const CartPage:FC = () => {
    const dispatch = useAppDispatch();
    const { cartItems } = useAppSelector(state => state.cart) as CartState;

    useEffect(() => {
            const list = cartItems?.map(item => item.id).join(',');
            dispatch( fetchGoods( {list} ) );
        },
        [cartItems]
    );

    return (
        <>
            <Cart />
            <Order />
        </>
    )
}