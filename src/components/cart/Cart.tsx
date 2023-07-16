import {FC} from "react";
import {Container} from "../layout/container";
import {useSelector} from "react-redux";
import {CartList} from "./cart-list";
import s from "./Cart.module.scss";

export const Cart:FC = () => {
    const { cartItems }   = useSelector(state => state.cart);
    const totalPrice = 0;

    return (
        <section className={s.cart}>
            <Container>
                <h2 className={s.title}> Ваша корзина </h2>
                {  cartItems?.length > 0
                    ? <CartList />
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
