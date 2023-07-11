import {FC, useEffect}              from "react";
import { useParams }                from 'react-router-dom';
import {useDispatch, useSelector}   from "react-redux";
import {Goods}                      from "../../components/goods";
import {Banner}                     from "../../components/banner";
import {fetchGoods}                 from "../../services/actions/goodsSlice";


export const MainPage: FC = () => {
    const {groupId: gender, categoryId: category} = useParams();
    const dispatch = useDispatch();
    const {activeGroup, categories} = useSelector(state => state.navigation);

    const groupData = categories[activeGroup];
    const categoryData = groupData?.list.find( item => item.slug === category);

    useEffect(() => {
        dispatch( fetchGoods( {gender, category } ) );
    }, [gender, category]);

    return (
        <>
            { !categoryData &&
                <Banner {...groupData}/>
            }
            <Goods {...categoryData}/>
        </>
    )
};
