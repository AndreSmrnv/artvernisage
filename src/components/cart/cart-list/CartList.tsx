import {FC}             from "react";
import {useAppSelector} from "../../../services/hooks";
import {CartItem}       from "../cart-item";
import s                from "../Cart.module.scss";
import {CartState} from "../../../services/actions/cartSlice";



export const getGoodById = (id: string, goods: API.Goods['goods']) =>  goods?.find(good => good.id === id) ?? {};

export const CartList:FC = () => {
    const { cartItems }   = useAppSelector(state => state.cart) as CartState;

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
};
