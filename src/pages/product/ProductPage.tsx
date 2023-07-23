import {FC, useEffect}              from "react";
import { useParams }                from 'react-router-dom';
import {fetchProduct, ProductState} from "../../services/actions/productSlice";
import {fetchGoods}                 from "../../services/actions/goodsSlice";
import {useAppDispatch, useAppSelector} from "../../services/hooks";
import {Card}                       from "../../components/product/card";
import {Goods}                      from "../../components/goods";


export const ProductPage:FC = () => {
    const {productId} = useParams();
    const dispatch = useAppDispatch();
    const { product } = useAppSelector(state => state.product) as ProductState;

    useEffect(() => {
        productId && dispatch( fetchProduct( productId ) );
    }, [productId]);

    useEffect(() => {
        const {gender, category} = product;
        dispatch( fetchGoods( {gender, category, count: 4, top: true, exclude: productId} ) );
    }, [product]);

    return (
        <>
            <Card />
            <Goods title={'Вам может понравиться'} />
        </>
    )
}