import {FC} from "react";
import {useSelector} from "react-redux";
import {CartItem} from "../cart-item";
import s from "../Cart.module.scss";

export const getGoodById = (id, goods = []) =>  goods.find(good => good.id === id) ?? {};

export const CartList:FC = () => {
    const { cartItems }   = useSelector(state => state.cart);
    const { goodList }    = useSelector(state => state.goods);


    return (
        <ul className={s.list}>
            {   cartItems?.map(
                    item => (
                        <li key={item.id} className={s.item}>
                            <CartItem {...item}/>
                        </li>
                    )
                )
            }
        </ul>
    )
}