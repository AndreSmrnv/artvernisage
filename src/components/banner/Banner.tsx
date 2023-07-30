import {FC} from "react";
import {NavLink}        from "react-router-dom";
import {Container}      from "../layout/container";
import {getPicPath, getProductPath} from "../../services/api";
import s                from './Banner.module.scss'
import {useWindowBreakpoint} from "../../services/subjects/";

interface IBannerProps {
    banner: APITypes.Banner
}

export const Banner:FC<IBannerProps> = ( {banner} ) => {
     const breakpoint = useWindowBreakpoint();
     const {description, bg , id} = banner ?? {};
     const backgroundImageUrl = bg ? {backgroundImage: `url(${getPicPath(bg?.[breakpoint])})`} : {};

     return (
         <section className={s.banner}
                  style={
                      {...backgroundImageUrl}
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
