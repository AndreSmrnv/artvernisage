import {FC} from "react";
import {useLocation} from "react-router-dom";
import {useNavigateSearch} from "../../../services/hooks/useNavigateSearch";
import s from "./Pagintaion.module.scss";
import cn from "classnames";
import {useLocationParams} from "../../../services/hooks/useLocationParams";

interface IPaginationProps {
    page: number | string;
    pages: number| string;
}

export const Pagination: FC<IPaginationProps> = ({page, pages}) => {
    const search = useLocationParams('search');
    const {pathname} = useLocation();
    const pageInt    = typeof page === 'string' ?  parseInt(page): page;
    const pagesInt   = typeof pages === 'string' ?  parseInt(pages) : pages;
    const navigate   = useNavigateSearch();

    const prevPage = pageInt > 1 ? pageInt - 1 : null;
    const nextPage = pageInt < pagesInt ? pageInt + 1 : null;

    const getNavParams = (page: number | null) => !!search ? { page, search} : {page};

    const onPrevHandler = () => navigate(pathname, getNavParams(prevPage) );
    const onNextHandler = () => navigate(pathname, getNavParams(nextPage) );

    return (
        <div className={s.pagination}>
            <button type={'button'}
                    className={s.arrow}
                    onClick={onPrevHandler}
                    disabled={!prevPage}
            >
                &lt;
            </button>
            <ul className={s.list}>
                { prevPage &&
                    <li className={s.link} onClick={onPrevHandler}>
                        {prevPage}
                    </li>
                }

                <li className={cn(s.link, s.linkActive)}>
                    {page}
                </li>

                { nextPage &&
                    <li className={s.link} onClick={onNextHandler}>
                        {nextPage}
                    </li>
                }
            </ul>
            <button type={'button'}
                    className={s.arrow}
                    onClick={onNextHandler}
                    disabled={!nextPage}
            >
                &gt;
            </button>

        </div>
    )
}