import {FC}             from "react";
import {NavLink}        from "react-router-dom";
import {Container}      from "../layout/container";
import {getProductPath} from "../../services/api";
import s                from './Banner.module.scss'

export const Banner:FC = ( {banner} ) => {
     const {description, bg , id} = banner ?? {};

     return (
         <section className={s.banner}>
            <Container>
                <div className={s.content}>
                    <h2 className={s.title}>
                        {description}
                    </h2>
                    <NavLink className={s.link} to={getProductPath(id)}>
                        Перейти
                    </NavLink>
                </div>
            </Container>
         </section>
     )
};
