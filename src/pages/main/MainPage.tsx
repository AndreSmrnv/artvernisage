import {FC, useEffect}              from "react";
import { useParams }                from 'react-router-dom';
import {useDispatch, useSelector}   from "react-redux";
import {Goods}                      from "../../components/goods";
import {Banner}                     from "../../components/banner";
import {fetchGoods}                 from "../../services/actions/goodsSlice";
import {useLocationParams} from "../../services/hooks/useLocationParams";


export const MainPage: FC = () => {
    const {groupId: gender, categoryId: category} = useParams();
    const dispatch = useDispatch();
    const {activeGroup, categories} = useSelector(state => state.navigation);
    const page = useLocationParams('page');
    const groupData = categories[activeGroup];
    const categoryData = groupData?.list.find( item => item.slug === category);

    useEffect(() => {
        dispatch( fetchGoods( {gender, category, page } ) );
    }, [gender, category, page]);

    return (
        <>
            { !categoryData &&
                <Banner {...groupData}/>
            }
            <Goods {...categoryData}/>
        </>
    )
};
