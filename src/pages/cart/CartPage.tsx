import {FC, useEffect, useState} from "react";
import {useDispatch, useSelector}   from "../../services/hooks";
import {fetchGoods}                 from "../../services/actions/goodsSlice";
import {Cart}                       from "../../components/cart";
import {Order}                      from "../../components/order";
import {CartState}                  from "../../services/actions/cartSlice";
import {Loader}                     from "../../components/layout/loader";


export const CartPage:FC = () => {
    const dispatch      = useDispatch();
    const { cartItems } = useSelector(state => state.cart) as CartState;
    const { status }    = useSelector(state => state.goods);
    const [listId , setListId] = useState<Array<string>>([]);

    useEffect(() => {
            const nextListId = cartItems?.map(item => item.id);

            if (nextListId.length !== listId.length) {
                const list = nextListId.join(',');
                dispatch( fetchGoods( {list} ) );
                setListId(nextListId);
            }
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