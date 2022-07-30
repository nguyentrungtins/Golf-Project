import Link from 'next/link';
import { useState } from 'react';
import styles from './SubLinkNav.module.scss';
const SubLinkLevel2 = ({ name, subName, url }) => {
    let subLinkLV2;
    const [navLinkHover, setNavLinkHover] = useState(false);

    const navLinkMouseInHandler = () => {
        setNavLinkHover(true);
    };
    const navLinkMouseOutHandler = () => {
        setNavLinkHover(false);
    };
    if (subName.length > 0) {
        subLinkLV2 = subName.map((e) => {
            return <li className={styles.subLVItem}>{e}</li>;
        });
    }
    return (
        <li
            className={styles.item}
            onMouseEnter={navLinkMouseInHandler}
            onMouseLeave={navLinkMouseOutHandler}
        >
            <Link href={url}>
                <a>{name}</a>
            </Link>

            {navLinkHover && (
                <ul className={styles.subLinkLV2}>
                    <span className={styles.wrapper2}></span>
                    {subLinkLV2}
                </ul>
            )}
        </li>
    );
};
export default SubLinkLevel2;
