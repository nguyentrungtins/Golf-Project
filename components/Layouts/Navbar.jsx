import styles from './Navbar.module.scss';
import Image from 'next/image';
import Logo from '../../public/Logo.png';
import { useState, useEffect } from 'react';
import classnames from 'classnames';
let lastScroll = 0;
const Navbar = () => {
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

    const isNavActive = classnames(
        styles.nav,
        scrollPositon & !positionOnTop ? styles.scrollUp : '',
        !scrollPositon & !positionOnTop ? styles.scrollDown : '',
        hambergerToggle ? styles.active : ''
    );
    const scrollHandler = () => {
        const currentScroll = window.scrollY;

        if (currentScroll <= 100) {
            setpositionOnTop(true);
            return;
        } else if (currentScroll < lastScroll) {
            setscrollPositon(true);
            setpositionOnTop(false);
            console.log('scroll up');
        } else if (currentScroll >= lastScroll) {
            setscrollPositon(false);
            setpositionOnTop(false);
            console.log('scroll down');
        }
        console.log('current', currentScroll);
        console.log('last', lastScroll);
        lastScroll = currentScroll;
    };
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
    }, []);
    return (
        <div className={isNavActive}>
            <ul className={styles.navItem}>
                <li className={styles.tag}>Dịch Vụ</li>
                <li className={styles.tag}>Sản Phẩm</li>
                <li className={styles.tag}>Khóa Học</li>
                <li>
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
                </li>
                <li className={styles.tag}>Khuyến Mãi</li>
                <li className={styles.tag}>Tin Tức</li>
                <li className={styles.tag}>Chúng Tôi</li>
                <li className={hambergerStyles} onClick={hambergerHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </li>
            </ul>
            <ul className={hambergerTagStyles}>
                <li className={isActive}>
                    <a href="#">Dịch Vụ</a>
                </li>
                <li className={isActive}>
                    <a href="#">Sản Phẩm</a>
                </li>
                <li className={isActive}>
                    <a href="#">Khóa Học</a>
                </li>
                <li className={isActive}>
                    <a href="#">Khuyến Mãi</a>
                </li>
                <li className={isActive}>
                    <a href="#">Tin Tức</a>
                </li>
                <li className={isActive}>
                    <a href="#">Chúng Tôi</a>
                </li>
            </ul>
        </div>
    );
};
export default Navbar;
