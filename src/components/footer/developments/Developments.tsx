import {FC} from "react";
import s from "../Footer.module.scss";

export const Developments: FC = () => (
    <div className={s.development}>
        <ul className={s.developmentList}>
            <li className={s.developmentItem}>
                Designer:
                <a className={s.link} href="https://t.me/fotobrush"> Anastasia Deriy</a>
            </li>
            <li className={s.developmentItem}>
                Developer:
                <a className={s.link} href="https://vk.com/andresmrnv"> Andre Smrnv</a>
            </li>
        </ul>
    </div>
);