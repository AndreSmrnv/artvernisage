import {ChangeEvent, FC, FormEvent, useState} from "react";
import s                         from './Search.module.scss';
import {Container} from "../layout/container";
import {useNavigateSearch} from "../../services/hooks/useNavigateSearch";
import {getSearchPath} from "../../services/api";
import {useLocationParams} from "../../services/hooks/useLocationParams";


export const Search:FC = () => {
    const searchParam = useLocationParams('search') ?? '';
    const [search, setSearch] = useState(searchParam);
    const navigate   = useNavigateSearch();

    const searchSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        navigate(getSearchPath(),{search});
    };

    const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => e && setSearch(e.target.value);

    return (
        <div className={s.search}>
            <Container>
                <form className={s.form} onSubmit={searchSubmitHandler}>
                    <input className={s.input}
                           type={'search'}
                           name={'search'}
                           placeholder={'Найти...'}
                           value={search}
                           onChange={searchChangeHandler}
                    />
                    <button className={s.btn} type={'submit'} > Искать </button>
                </form>
            </Container>
        </div>
    )
}