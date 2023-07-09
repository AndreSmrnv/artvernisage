import {FC} from "react";
import s from "../Footer.module.scss";

export const Contacts: FC = () => (
    <div className={s.contacts}>
        <a className={s.link} href='mailto:artVernisage@vk.com'>
            artVernisage@vk.com
        </a>
        <a className={s.link} href='tel:89301234567'>
            8 930 123 45 67
        </a>
    </div>
);
