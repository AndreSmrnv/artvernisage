import {CSSProperties, FC}              from "react";
import cn                               from "classnames";
import {useDispatch, useSelector}       from "../../../services/hooks";
import {patchIdCart, rmIdCart}          from "../../../services/actions/cartSlice";
import {getColorById}                   from "../../color-list/ColorList";
import {getGoodById}                    from "../cart-list/CartList";
import {getPicPath}                     from "../../../services/api";
import {Count}                          from "../../count";
import s                                from "./CartItem.module.scss";


export const CartItem:FC<APITypes.CartItem> = ({id, count, colorId, size}) => {
    const dispatch = useDispatch();
    const { goodList: {goods} } = useSelector(state => state.goods);
    const { colorList } = useSelector(state => state.colors);
    const good = getGoodById(id, goods);
    const {pic, title, price} = good as APITypes.Good;

    const code = colorId && colorList ? getColorById(colorId,colorList)?.code : 'black';


    const rmGoodHandler = () =>  dispatch(rmIdCart(id));

    const changeCountHandler = (count: number) => dispatch( patchIdCart({id, count}) );

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
                         style={{'--data-color': code} as CSSProperties}
                    />
                </div>
                <div className={s.size}>
                    <p className={cn(s.subtitle, s.sizeTitle)}> Размер </p>
                    <div className={s.sizeItem}>
                        {size}
                    </div>
                </div>
            </div>


            <Count value={ count }  onChange={changeCountHandler} />
            <button className={s.del} type={'button'} onClick={rmGoodHandler}/>

        </article>
    )
};
