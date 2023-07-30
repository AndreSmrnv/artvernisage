import {useNavigate,createSearchParams} from 'react-router-dom';
export const useNavigateSearch = () => {
    const navigate = useNavigate();
    return (pathname: string, params: APITypes.SearchParams) =>
        navigate({ pathname, search: `?${createSearchParams(params)}` });
};