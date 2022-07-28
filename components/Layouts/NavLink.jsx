import { useState } from 'react';
import SublinkNav from './SubLinkNav';
import styles from './Navbar.module.scss';
import Link from 'next/link';
const NavLink = ({ position, name, isOnTop, href }) => {
    const [navLinkHover, setNavLinkHover] = useState(false);

    const navLinkMouseInHandler = () => {
        setNavLinkHover(true);
    };
    const navLinkMouseOutHandler = () => {
        setNavLinkHover(false);
    };
    return (
        <li
            className={styles.tag}
            onMouseEnter={navLinkMouseInHandler}
            onMouseLeave={navLinkMouseOutHandler}
        >
            <Link href={href}>
                <a>{name}</a>
            </Link>
            {navLinkHover && (
                <SublinkNav
                    subLinkPosition={position}
                    isHover={navLinkHover}
                    isOnTop={isOnTop}
                />
            )}
        </li>
    );
};
export default NavLink;
