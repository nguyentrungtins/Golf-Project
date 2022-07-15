import styles from './Navbar.module.scss';
import Image from 'next/image';
import Logo from '../../public/Logo.png';
import { useState } from 'react';
import classnames from 'classnames';

const Navbar = () => {
    const [hambergerToggle, setHambergerToggle] = useState(false);

    const hambergerHandler = (e) => {
        setHambergerToggle(!hambergerToggle);
    };
    const hambergerStyles = classnames(
        styles.hamberger,
        hambergerToggle ? styles.active : ''
    );
    return (
        <div className={styles.nav}>
            <ul className={styles.navItem}>
                <li className={styles.tag}>Dịch Vụ</li>
                <li className={styles.tag}>Sản Phẩm</li>
                <li className={styles.tag}>Khóa Học</li>
                <li>
                    <Image
                        src={Logo}
                        alt="Logo Image"
                        width="58px"
                        height="80px"
                    />
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
        </div>
    );
};
export default Navbar;
