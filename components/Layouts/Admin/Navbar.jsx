import styles from './Navbar.module.scss';
import Image from 'next/image';
import Logo from '../../../public/Logo.png';
import { useState, useEffect } from 'react';
import classnames from 'classnames';
import NavLink from '../NavLink';
import Link from 'next/link';

const Navbar = ({ isNavTrans = false }) => {
    let lastScroll = 0;
    const [hambergerToggle, setHambergerToggle] = useState(false);
    const [scrollPositon, setscrollPositon] = useState(true);
    const [positionOnTop, setpositionOnTop] = useState(true);

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
                <li className={styles.tag}>
                    <a href="#">Dịch Vụ</a>
                </li>

                <li className={styles.tag}>
                    <a href="#">Sản Phẩm</a>
                </li>

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
                    <a href="#">Khóa học</a>
                </li>
                <li className={styles.tag}>
                    <a href="#">Tin Tức</a>
                </li>
            </ul>
        </div>
    );
};
export default Navbar;
