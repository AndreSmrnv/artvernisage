import {FC, useEffect}                  from "react";
import { useParams }                    from 'react-router-dom';
import {useDispatch, useSelector} from "../../services/hooks";
import {useLocationParams}              from "../../services/hooks/useLocationParams";
import {fetchGoods}                     from "../../services/actions/goodsSlice";
import {Goods}                          from "../../components/goods";
import {Banner}                         from "../../components/banner";
import {NavigationState} from "../../services/actions/navigationSlice";




export const MainPage: FC = () => {
    const {groupId: gender, categoryId: category} = useParams();
    const dispatch = useDispatch();
    const {activeGroup, categories} = useSelector(state => state.navigation) as NavigationState;
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
