import {FC, useEffect}                  from "react";
import {fetchGoods}                     from "../../services/actions/goodsSlice";
import {FavoriteState, resetFavorite}   from "../../services/actions/favoriteSlice";
import {useLocationParams}              from "../../services/hooks/useLocationParams";
import {useDispatch, useSelector}       from "../../services/hooks";
import {Goods}                          from "../../components/goods";
import {InfoMsg}                        from "../../components/info-msg";
import {Loader}                         from "../../components/layout/loader";



export const FavoritePage:FC = () => {
    const dispatch = useDispatch();
    const { goods, status } = useSelector(state => state.favorite) as FavoriteState;
    const page = useLocationParams('page');

    useEffect(() => {
        const list = goods?.join(',') ?? '';
        dispatch( fetchGoods( {list, page} ) );
        goods.every( id => id === null ) && dispatch(  resetFavorite() );

    }, [goods, page]);


    
    return (
        <Loader status={status}>
            { goods?.length > 0
                ? <Goods title={'Вам понравилось'} />
                : <InfoMsg message={'Кажется Вы ничего не подобрали себе ;)'}/>
            }
        </Loader>
    )
};
