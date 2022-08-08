import styles from './Navbar.module.scss';
import Image from 'next/image';
import Logo from '../../../public/Logo.png';
import { useState, useEffect } from 'react';
import classnames from 'classnames';
import SublinkNav from './SubLinkNav';
import NavLink from './NavLink';
import Link from 'next/link';
const Navbar = ({ isNavTrans = false }) => {
    let lastScroll = 0;
    const [hambergerToggle, setHambergerToggle] = useState(false);
    const [scrollPositon, setscrollPositon] = useState(true);
    const [positionOnTop, setpositionOnTop] = useState(true);
    const hambergerHandler = (e) => {
        setHambergerToggle(!hambergerToggle);
    };
    const hambergerStyles = classnames(
        styles.hamberger,
        hambergerToggle ? styles.active : ''
    );

    const hambergerTagStyles = classnames(
        styles.navItemMobile,
        hambergerToggle ? styles.open : ''
    );
    const isActive = classnames(hambergerToggle ? styles.fade : '');
    let isNavActive;
    if (isNavTrans) {
        isNavActive = classnames(
            styles.nav,
            scrollPositon & !positionOnTop ? styles.scrollUp : '',
            !scrollPositon & !positionOnTop ? styles.scrollDown : '',
            hambergerToggle ? styles.active : ''
        );
    } else {
        isNavActive = classnames(
            styles.nav,
            scrollPositon ? styles.scrollUp : '',
            !scrollPositon ? styles.scrollDown : '',
            hambergerToggle ? styles.active : ''
        );
    }
    const scrollHandler = () => {
        const currentScroll = window.scrollY;
        if (currentScroll <= 100) {
            setpositionOnTop(true);
            return;
        } else if (currentScroll < lastScroll) {
            setscrollPositon(true);
            setpositionOnTop(false);
        } else if (currentScroll >= lastScroll) {
            setscrollPositon(false);
            setpositionOnTop(false);
        }

        lastScroll = currentScroll;
    };
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div className={isNavActive}>
            <ul className={styles.navItem}>
                <NavLink
                    name={'Dịch Vụ'}
                    position={'one'}
                    isOnTop={isNavTrans ? positionOnTop : false}
                    href={'/#services'}
                />

                <NavLink
                    name={'Sản Phẩm'}
                    position={'two'}
                    isOnTop={isNavTrans ? positionOnTop : false}
                    href={'/products'}
                />

                <NavLink
                    name={'Khóa Học'}
                    position={'three'}
                    isOnTop={isNavTrans ? positionOnTop : false}
                    href={'/#courses'}
                />

                <li>
                    <Link href="/">
                        <div className={styles.logo}>
                            <Image
                                src={Logo}
                                alt="Logo Image"
                                width={58}
                                height={64}
                                layout="fixed"
                            />
                            <p>CGV</p>
                        </div>
                    </Link>
                </li>
                <li className={styles.tag}>
                    <Link href="#">
                        <a>Khuyến Mãi</a>
                    </Link>
                </li>
                <li className={styles.tag}>
                    <Link href="/tin-tuc">
                        <a>Tin Tức</a>
                    </Link>
                </li>
                <li className={styles.tag}>
                    <Link href="/ve-chung-toi">
                        <a href="#">Chúng Tôi</a>
                    </Link>
                </li>
                <li className={hambergerStyles} onClick={hambergerHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </li>
            </ul>
            <ul className={hambergerTagStyles}>
                <li
                    className={isActive}
                    onClick={() => {
                        setHambergerToggle(false);
                    }}
                >
                    <Link href="/#services">
                        <a>Dịch Vụ</a>
                    </Link>
                </li>
                <li
                    className={isActive}
                    onClick={() => {
                        setHambergerToggle(false);
                    }}
                >
                    <Link href="/products">
                        <a>Sản Phẩm</a>
                    </Link>
                </li>
                <li
                    className={isActive}
                    onClick={() => {
                        setHambergerToggle(false);
                    }}
                >
                    <Link href="/#courses">
                        <a>Khóa Học</a>
                    </Link>
                </li>
                <li
                    className={isActive}
                    onClick={() => {
                        setHambergerToggle(false);
                    }}
                >
                    <Link href="/products/sale">
                        <a>Khuyến Mãi</a>
                    </Link>
                </li>
                <li
                    className={isActive}
                    onClick={() => {
                        setHambergerToggle(false);
                    }}
                >
                    <Link href="/tin-tuc">
                        <a>Tin Tức</a>
                    </Link>
                </li>
                <li className={isActive}>
                    <Link href="/ve-chung-toi">
                        <a>Chúng Tôi</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};
export default Navbar;
