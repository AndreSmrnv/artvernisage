import {FC, useEffect}              from "react";
import {useDispatch, useSelector}   from "react-redux";
import { useParams }                from 'react-router-dom';
import {Card}                       from "../../components/product/card";
import {Goods}                      from "../../components/goods";
import {fetchProduct}               from "../../services/actions/productSlice";
import {fetchGoods}                 from "../../services/actions/goodsSlice";

export const ProductPage:FC = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const { status, product } = useSelector(state => state.product);

    useEffect(() => {
        dispatch( fetchProduct( productId ) );
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