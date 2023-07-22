import {FC} from "react";
import {Container} from "../layout/container";
import {useAppSelector} from "../../services/hooks";
import {CartList} from "./cart-list";
import s from "./Cart.module.scss";


export const Cart:FC = () => {
    const { cartItems }   = useAppSelector(state => state.cart);
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
