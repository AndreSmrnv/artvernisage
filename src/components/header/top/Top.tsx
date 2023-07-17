import {Logo} from "./Logo";
import {HandbagSimpleIcon, HeartIcon, MagnifyingGlassIcon} from "../../icons";
import {Container} from "../../layout";
import s from './Top.module.scss';
import cn from 'classnames';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";



export const Top = () => {
    const {countItems} = useSelector(state => state.cart);
    const {count: countFavorites} = useSelector(state => state.favorite);

    return (
        <div className={s.top}>
            <Container className={s.topContainer}>
                <a className={cn(s.topLink, s.topPhone)} href="tel:89304902620">8 930 490 26 20</a>

                <a className={s.topLogo} href="/">
                    <Logo/>
                </a>

                <div className={s.topNavigation}>
                    <ul className={s.topNavList}>
                        <li className={s.topNavItem}>
                            <button className={s.topLink}>
                                <MagnifyingGlassIcon/>
                            </button>
                        </li>

                        <li className={s.topNavList}>
                            <NavLink to={'/cart'} className={s.topLink}>
                                <HandbagSimpleIcon/>
                                {!!countItems &&
                                    <span className={s.topLinkCount}>{countItems}</span>
                                }
                            </NavLink>

                        </li>

                        <li className={s.topNavList}>
                            <NavLink to={'/favorite'} className={cn(s.topLink, s.like)}>
                                <HeartIcon/>
                                {!!countFavorites &&
                                    <span className={s.topLinkCount}>{countFavorites}</span>
                                }
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
};
