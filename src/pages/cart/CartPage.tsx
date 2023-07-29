import {FC, useEffect}              from "react";
import {useDispatch, useSelector}   from "../../services/hooks";
import {fetchGoods}                 from "../../services/actions/goodsSlice";
import {Cart}                       from "../../components/cart";
import {Order}                      from "../../components/order";
import {CartState}                  from "../../services/actions/cartSlice";
import {Loader}                     from "../../components/layout/loader";


export const CartPage:FC = () => {
    const dispatch = useDispatch();
    const { cartItems, status } = useSelector(state => state.cart) as CartState;

    useEffect(() => {
            const list = cartItems?.map(item => item.id).join(',');
            dispatch( fetchGoods( {list} ) );
        },
        [cartItems]
    );

    return (
        <Loader status={status}>
            <Cart />
            <Order />
        </Loader>
    )
}