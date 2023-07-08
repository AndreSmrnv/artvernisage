import {Logo} from "./Logo";
import {HandbagSimpleIcon, HeartIcon, MagnifyingGlassIcon} from "./icons";
import {Container} from "../../layout";
import s from './Top.module.scss';
import cn from 'classnames';



export const Top = () => (
    <div className={s.top}>
        <Container className={s.topContainer}>
            <a className={cn(s.topLink, s.topPhone)} href="tel:89304902620">8 930 490 26 20</a>

            <a className= {s.topLogo} href="/">
                <Logo />
            </a>

            <div className={s.topNavigation}>
                <ul className={s.topNavList}>
                    <li className={s.topNavItem}>
                        <button className={s.topLink}>
                            <MagnifyingGlassIcon />
                        </button>
                    </li>

                    <li className={s.topNavList}>
                    <a className={s.topLink}>
                        <HandbagSimpleIcon />
                    </a>
                    </li>

                    <li className={s.topNavList}>
                    <a className={s.topLink}>
                        <HeartIcon/>
                    </a>
                    </li>
                </ul>
            </div>
       </Container>
    </div>
)