import {FC, useEffect} from "react";
import {useDispatch} from "react-redux";
import { useParams }                from 'react-router-dom';
import {Card} from "../../components/product/card";
import {fetchProduct} from "../../services/actions/productSlice";

export const ProductPage:FC = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( fetchProduct( productId ) );
    }, [productId]);

    return (
        <>
            <Card />
        </>
    )
}