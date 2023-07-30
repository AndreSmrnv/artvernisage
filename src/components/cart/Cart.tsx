import {FC, useEffect, useState} from "react";
import {Container}      from "../layout/container";
import {useSelector}    from "../../services/hooks";
import {CartList}       from "./cart-list";
import s                from "./Cart.module.scss";




export const Cart:FC = () => {
    const { cartItems, countItems }   = useSelector(state => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(
        () => {
            const currTotalPrice = cartItems && Array.isArray(cartItems)
                ? cartItems.reduce((sum, {count, price}) => count * price + sum, 0)
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
