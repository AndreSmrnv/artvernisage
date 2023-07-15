import { useLocation }                from 'react-router-dom';

export const useLocationParams = (param: string) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(param) ?? null

};
