import {FC, useState}    from "react";
import {useDispatch, useSelector}   from "react-redux";
import cn                           from 'classnames';
import {Container}                  from "../../layout/container";
import {getPicPath}                 from "../../../services/api";
import {ColorList}                  from "../../color-list";
import {Count}                      from "../../count";
import {SizeList}                   from "../../size-list";
import {FavoriteButton}             from "../btn-favorite/FavoriteButton";
import s                            from './Card.module.scss';
import {addIdCart} from "../../../services/actions/cartSlice";




export const Card:FC = () => {
    const { status, product } = useSelector(state => state.product);
    const {
        id,
        pic,
        title,
        price,
        description,
    } = product;
    const dispatch = useDispatch();
    const [activeColor, setActiveColor] = useState(null);
    const [activeSize, setActiveSize] = useState(null);
    const [count, setCount] = useState(1);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(addIdCart({id, count}));
    }

    return (
        <section className={s.card}>
            <Container className={s.container}>
                <img className={s.image} src={ getPicPath(pic) } />
                <form className={s.content} onSubmit={formSubmitHandler}>
                    <h2 className={s.title}>
                        {title}
                    </h2>
                    <p className={s.price}>
                        &#8381; {price}
                    </p>
                    <div className={s.vendorCode}>
                        <span className={s.subtitle}> Артикул </span>
                        <span className={s.id}>
                            {id}
                        </span>
                    </div>

                    <div className={s.color}>
                        <p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
                        <ColorList onChange={setActiveColor} activeColor={activeColor} {...product}/>
                    </div>
                    <SizeList onChange={setActiveSize} activeSize={activeSize} {...product}/>

                    <div className={s.description} >
                        <p className={cn(s.subtitle, s.descriptionTitle)} > Описание </p>
                        <p className={s.descriptionText}>
                            {description}
                        </p>
                    </div>

                    <div className={s.control} >
                        <Count className={s.count} onChange={setCount}/>
                        <button className={s.addCart} type={'submit'}>
                            В корзину
                        </button>
                        <FavoriteButton productId={id}/>
                    </div>

                </form>
            </Container>
        </section>
    )
}