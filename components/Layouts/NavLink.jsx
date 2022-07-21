import { useState } from 'react';
import SublinkNav from './SubLinkNav';
import styles from './Navbar.module.scss';

const NavLink = ({ position, name, isOnTop }) => {
    const [navLinkHover, setNavLinkHover] = useState(false);

    const navLinkMouseInHandler = () => {
        console.log('On Mount In');
        setNavLinkHover(true);
    };
    const navLinkMouseOutHandler = () => {
        console.log('On Mount Out');
        setNavLinkHover(false);
    };
    return (
        <li
            className={styles.tag}
            onMouseEnter={navLinkMouseInHandler}
            onMouseLeave={navLinkMouseOutHandler}
        >
            <a href="#">{name}</a>
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
