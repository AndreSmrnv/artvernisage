import {FC, useEffect}              from "react";
import {useDispatch, useSelector}   from "react-redux";
import {Goods}                      from "../../components/goods";
import {InfoMsg}                    from "../../components/info-msg";
import {fetchGoods}                 from "../../services/actions/goodsSlice";
import {resetFavorite}              from "../../services/actions/favoriteSlice";
import {useLocationParams}          from "../../services/hooks/useLocationParams";


export const FavoritePage:FC = () => {
    const dispatch = useDispatch();
    const { status, goods: list } = useSelector(state => state.favorite);
    const page = useLocationParams('page');

    useEffect(() => {
        dispatch( fetchGoods( {list, page} ) );
        list.every( id => id === null ) && dispatch(  resetFavorite() );

    }, [list, page]);


    
    return (
        <>
            { list?.length > 0
                ? <Goods title={'Вам понравилось'} />
                : <InfoMsg message={'Кажется Вам ничего не понравилось ;)'}/>
            }
        </>
    )
};
