import {FC, useState} from "react";
import {NavLink}        from "react-router-dom";
import {Container}      from "../layout/container";
import {getPicPath, getProductPath} from "../../services/api";
import s                from './Banner.module.scss'
import {useWindowBreakpoint} from "../../services/subjects/";

export const Banner:FC = ( {banner} ) => {
     const breakpoint = useWindowBreakpoint();
     const {description, bg , id} = banner ?? {};

     return (
         <section className={s.banner}
                  style={
                      {backgroundImage: `url(${getPicPath(bg?.[breakpoint])})`}
                  }
         >
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
