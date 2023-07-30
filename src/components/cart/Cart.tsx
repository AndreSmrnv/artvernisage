import {FC, useEffect, useState} from "react";
import {Container}      from "../layout/container";
import {useDispatch, useSelector} from "../../services/hooks";
import {CartList}       from "./cart-list";
import s                from "./Cart.module.scss";
import {fetchGoods} from "../../services/actions/goodsSlice";


export const Cart:FC = () => {
    const dispatch = useDispatch();
    const { cartItems, countItems }   = useSelector(state => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(
        () => {
            const list = cartItems?.map(item => item.id).join(',') ?? '';
            dispatch( fetchGoods( {list} ) );
            const currTotalPrice = Array.isArray(cartItems)
                ? cartItems.reduce((s, {count, price}) => count * price + s, 0)
                : 0
            ;
            setTotalPrice(currTotalPrice);
        },
        [cartItems]
    );


    return (
        <section className={s.cart}>
            <Container>
                <h2 className={s.title}> Ваша корзина </h2>
                {  !!countItems
                    ? <CartList cartItems={cartItems}/>
                    : <h3> В корзине пусто </h3>
                }
                <div className={s.total}>
                    <p> Итого:</p>
                    <p>&#8381; {totalPrice}</p>
                </div>
            </Container>

        </section>
    )
};
