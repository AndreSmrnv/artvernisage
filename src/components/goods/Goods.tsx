import {FC}             from "react";
import {useAppSelector} from "../../services/hooks";
import {Container}      from "../layout/container";
import {Product}        from "../product";
import {Pagination}     from "./pagination";
import s                from "./Goods.module.scss";
import {GoodsState} from "../../services/actions/goodsSlice";


interface IGoodsProps {
    title?: string;
}

export const Goods: FC<IGoodsProps> = ({title = 'Новинки'}) => {
    const {goodList} = useAppSelector(state => state.goods) as GoodsState;
    return (
        <section className={s.goods}>
            <Container>
                <h2 className={s.title}>
                    {title}
                    {goodList?.totalCount && goodList?.pages > 1 &&
                        <sup> &nbsp;({goodList.totalCount})</sup>
                    }
                </h2>
                <ul className={s.list}>
                    {   goodList?.goods.map( good =>
                            <Product key={good.id} {...good}/>
                        )
                    }
                </ul>
                { !!goodList?.page && goodList?.pages > 1 &&
                    <Pagination {...goodList} />
                }
            </Container>
        </section>
    )
};
