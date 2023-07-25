import {FC, useEffect}                  from "react";
import {useDispatch, useSelector} from "../../services/hooks";
import {useLocationParams}              from "../../services/hooks/useLocationParams";
import {fetchGoods}                     from "../../services/actions/goodsSlice";
import {Goods}                          from "../../components/goods";
import {InfoMsg}                        from "../../components/info-msg";


export const SearchPage:FC = () => {
    const search    = useLocationParams('search');
    const page      = useLocationParams('page');

    const dispatch = useDispatch();
    const {totalCount} = useSelector(state => state.goods.goodList);

    useEffect(
        () => {
            dispatch( fetchGoods({search, page}) );
        },
        [search, page]
    );

    return (
        <>
            { (!!totalCount)
                ? <Goods title={'Вы искали'} />
                : <InfoMsg message={'Кажется ничего не найдено ;)'}/>
            }
        </>
    )
};
