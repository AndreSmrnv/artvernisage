import {FC}                             from "react";
import cn                               from 'classnames';
import {useDispatch, useSelector} from "../../../services/hooks";
import {addIdFavorite, rmIdFavorite}    from "../../../services/actions/favoriteSlice";
import {HeartIcon}                      from "../../icons";
import s                                from './FavoriteButton.module.scss';

interface IFavoriteButtonProps {
    productId: string
}

export const FavoriteButton:FC<IFavoriteButtonProps> = ({productId}) => {
    const dispatch = useDispatch();
    const isActive = useSelector(state => state.favorite.goods.includes(productId));
    const onClickHandler = () => dispatch( isActive ? rmIdFavorite( productId ) : addIdFavorite( productId ) );

    return (
        <button className={cn(s.like, isActive ? s.active : '')} onClick={onClickHandler} type={'button'}>
            <HeartIcon />
        </button>
    )
};
