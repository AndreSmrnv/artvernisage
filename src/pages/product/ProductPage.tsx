import {FC, useEffect}              from "react";
import { useParams }                from 'react-router-dom';
import {fetchProduct, ProductState} from "../../services/actions/productSlice";
import {fetchGoods}                 from "../../services/actions/goodsSlice";
import {useDispatch, useSelector}   from "../../services/hooks";
import {Card}                       from "../../components/product/card";
import {Goods}                      from "../../components/goods";
import {Loader}                     from "../../components/layout/loader";


export const ProductPage:FC = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const { product, status } = useSelector(state => state.product) as ProductState;

    useEffect(() => {
        productId && dispatch( fetchProduct( productId ) );
    }, [productId]);

    useEffect(() => {
        const {gender, category} = product;
        dispatch( fetchGoods( {gender, category, count: 4, top: true, exclude: productId} ) );
    }, [product]);

    return (
        <Loader status={status}>
            <Card />
            <Goods title={'Вам может понравиться'} />
        </Loader>
    )
}