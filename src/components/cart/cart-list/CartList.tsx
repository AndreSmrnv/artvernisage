import {FC}             from "react";
import {CartItem}       from "../cart-item";
import s                from "../Cart.module.scss";
import {CartState} from "../../../services/actions/cartSlice";

interface ICartList {
    cartItems: CartState['cartItems']
}

export const getGoodById = (id: string, goods: APITypes.Goods['goods']) =>  goods?.find(good => good.id === id) ?? {};

export const CartList:FC<ICartList> = ({cartItems}) => (
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
);
