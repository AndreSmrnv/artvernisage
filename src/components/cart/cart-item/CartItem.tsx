import {FC, useState}               from "react";
import {useDispatch, useSelector}   from "react-redux";
import cn                           from "classnames";
import {rmIdCart}                   from "../../../services/actions/cartSlice";
import {getGoodById}                from "../cart-list/CartList";
import {getPicPath}                 from "../../../services/api";
import {Count}                      from "../../count";
import s from "./CartItem.module.scss";



export const CartItem:FC = ({id, count}) => {
    const dispatch = useDispatch();
    const { goodList: {goods} }    = useSelector(state => state.goods);
    const {pic, title, price , code = 'black', size = 'L'} = getGoodById(id, goods);


    const rmGoodHandler = () =>  dispatch(rmIdCart(id));

    return (
        <article className={s.item}>
            <img className={s.image} src={getPicPath(pic)} />

            <div className={s.content}>
                <h3 className={s.title} > {title} </h3>
                <p className={s.price} > &#8381; {price}</p>
                <div className={s.vendorCode}>
                    <span className={s.subtitle}> Артикул </span>
                    <span > {id}</span>
                </div>
            </div>

            <div className={s.prop}>
                <div className={s.color}>
                    <p className={cn(s.subtitle, s.colorTitle)}> Цвет </p>
                    <div className={s.colorItem}
                         style={{'--data-color': code}}
                    />
                </div>
                <div className={s.size}>
                    <p className={cn(s.subtitle, s.sizeTitle)}> Размер </p>
                    <div className={s.sizeItem}>
                        {size[0]}
                    </div>
                </div>
            </div>

            <button className={s.del} type={'button'} onClick={rmGoodHandler}/>
            <Count value={ count } />


        </article>
    )
};
