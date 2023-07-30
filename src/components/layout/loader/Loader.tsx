import {FC, ReactNode, useEffect, useState} from "react";
import {SpinInfitity}                       from "./SpinInfinity";

interface ILoaderProps {
    children:   ReactNode;
    loading?:   boolean;
    status?:    MainTypes.Status;
    
}

export const Loader:FC<ILoaderProps> = (
    {
        loading: _loading= false,
        status,
        children
    }
) => {
    const [loading, setLoading] = useState(_loading);
    
    useEffect(
        () => {
            const next =  status
                ? ['idle', 'loading'].includes(status)
                : _loading
            ;
            setLoading(next)
        },
        [status, _loading]
    )
    return (
        loading
            ? <SpinInfitity />
            : children
    )

}