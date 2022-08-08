import styles from './Navbar.module.scss';
import Image from 'next/image';
import Logo from '../../../public/Logo.png';
import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/client';
import classnames from 'classnames';
import Link from 'next/link';

const Navbar = ({ isNavTrans = false }) => {
    let lastScroll = 0;
    const [scrollPositon, setscrollPositon] = useState(true);
    const [positionOnTop, setpositionOnTop] = useState(true);
    const [session, loading] = useSession();

    function logoutHandler() {
        signOut();
    }

    let isNavActive;
    if (isNavTrans) {
        isNavActive = classnames(
            styles.nav,
            scrollPositon & !positionOnTop ? styles.scrollUp : '',
            !scrollPositon & !positionOnTop ? styles.scrollDown : ''
        );
    } else {
        isNavActive = classnames(
            styles.nav,
            scrollPositon ? styles.scrollUp : '',
            !scrollPositon ? styles.scrollDown : ''
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
                <Link href="/admin/products">
                    <li className={styles.tag}>
                        <a>Sản Phẩm</a>
                    </li>
                </Link>

                <li>
                    <Link href="/admin">
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
                <Link href="/admin/bulletins">
                    <li className={styles.tag}>
                        <a href="#">Tin Tức</a>
                    </li>
                </Link>
            </ul>
        </div>
    );
};
export default Navbar;
