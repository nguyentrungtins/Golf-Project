import styles from './Footer.module.scss';
import { BsFacebook, BsInstagram, BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const FooterSection = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.title}>Vol de Nuitt</div>
                        <div className={styles.body}>
                            An aspirational fine dining experience on the French
                            countryside
                        </div>
                    </div>
                    <div className={styles.col}>
                        <ul className={styles.aboutUs}>
                            <li>
                                <a href="#">Out Story</a>
                            </li>
                            <li>
                                <a href="#">Out Menu</a>
                            </li>
                            <li>
                                <a href="#">The Experience</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <ul className={styles.info}>
                            <li>
                                <span style={{ top: '0.188rem' }}>
                                    <HiOutlineLocationMarker />
                                </span>
                                9400 Canal St. Green Bay, WI 54302, Lorem Ipsum
                                Dolor Sit
                            </li>
                            <li>
                                <span style={{ top: '0.188rem' }}>
                                    <BsTelephone />
                                </span>
                                +33 6 72 53 12 75
                            </li>
                            <li>
                                <span style={{ top: '0.188rem' }}>
                                    <FiMail />
                                </span>
                                voldenuitt@contact.com
                            </li>
                            <li>
                                <span className={styles.socialIcon}>
                                    <a href="#">
                                        <BsFacebook />
                                    </a>
                                </span>
                                <span className={styles.socialIcon}>
                                    <a href="#">
                                        <BsInstagram />
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <button>BOOK A TABLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
