import {FC, useEffect}              from "react";
import { useParams }                from 'react-router-dom'
import {useDispatch, useSelector}   from "react-redux";
import {Container}                  from "../../components/layout/container";
import {Product}                    from "../../components/product";
import {fetchGoods}                 from "../../services/actions/goodsSlice";
import s                            from './MainPage.module.scss'


export const MainPage: FC = ({gender ='women'}) => {
    const {groupId, categoryId} = useParams();
    const dispatch = useDispatch();
    const {activeGroup} = useSelector(state => state.navigation);
    const {goodList} = useSelector(state => state.goods);

    useEffect(() => {
        dispatch(fetchGoods(activeGroup));
    }, [activeGroup]);

    return (
        <section className={s.goods}>
            <Container>
                <h2 className={s.title}>Новинки {groupId}</h2>
                <ul className={s.list}>
                    {   goodList?.map( good =>
                            <Product key={good.id} {...good}/>
                        )
                    }
                </ul>
            </Container>

        </section>

    )
};
