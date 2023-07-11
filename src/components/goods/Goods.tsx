import {FC} from "react";
import { useSelector} from "react-redux";
import {Container} from "../layout/container";
import {Product} from "../product";
import s from "./Goods.module.scss";


export const Goods:FC = ({title = 'Новинки'}) => {
    const {goodList} = useSelector(state => state.goods);
    return (
        <section className={s.goods}>
            <Container>
                <h2 className={s.title}>
                    {title}
                </h2>
                <ul className={s.list}>
                    {   goodList?.goods?.map( good =>
                            <Product key={good.id} {...good}/>
                        )
                    }
                </ul>
            </Container>
        </section>
    )
};
