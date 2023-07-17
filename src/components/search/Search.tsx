import {FC} from "react";
import s                         from './Search.module.scss';
import {Container} from "../layout/container";


export const Search:FC = () => {

    return (
        <div className={s.search}>
            <Container>
                <form className={s.form}>
                    <input className={s.input}
                           type={'search'}
                           name={'search'}
                           placeholder={'Найти...'}
                    />
                    <button className={s.btn} type={'submit'} > Искать </button>
                </form>
            </Container>
        </div>
    )
}