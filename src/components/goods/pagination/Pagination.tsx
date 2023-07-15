import {FC} from "react";
import {useLocation} from "react-router-dom";
import {useNavigateSearch} from "../../../services/hooks/useNavigateSearch";
import s from "./Pagintaion.module.scss";
import cn from "classnames";



export const Pagination:FC = ({page, pages}) => {
    const {pathname} = useLocation();
    const pageInt    = parseInt(page);
    const pagesInt   = parseInt(pages);
    const navigate   = useNavigateSearch();

    const prevPage = pageInt > 1 ? pageInt - 1 : null;
    const nextPage = pageInt < pagesInt ? pageInt + 1 : null;


    const onPrevHandler = () => navigate(pathname,{page: prevPage});
    const onNextHandler = () => navigate(pathname,{page: nextPage});

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

                <li className={cn(s.link, s.linkActive)} disabled>
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