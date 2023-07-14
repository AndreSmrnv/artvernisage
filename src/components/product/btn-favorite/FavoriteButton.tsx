import {FC} from "react";
import {HeartIcon} from "../../icons";
import {useDispatch, useSelector} from "react-redux";
import cn               from 'classnames';
import {addIdFavorite, rmIdFavorite} from "../../../services/actions/favoriteSlice";
import s from './FavoriteButton.module.scss';


export const FavoriteButton:FC = ({productId}) => {
    const dispatch = useDispatch();
    const isActive = useSelector(state => state.favorite.goods.includes(productId));
    const onClickHandler = () => dispatch( isActive ? rmIdFavorite( productId ) : addIdFavorite( productId ) );

    return (
        <button className={cn(s.like, isActive ? s.active : '')} onClick={onClickHandler} type={'button'}>
            <HeartIcon />
        </button>
    )
}