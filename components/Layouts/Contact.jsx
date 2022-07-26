import styles from './Contact.module.scss';
import { FaFacebookF, FaPhone } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const Contact = () => {
    return (
        <div className={styles.container}>
            <ul>
                <li>
                    <a href="#">
                        <div>
                            <FaFacebookF />
                        </div>
                        <p>Chat Facebook</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <SiZalo size={25} />
                        </div>
                        <p>Chat Zalo</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <FaPhone />
                        </div>
                        <p>090 9317 3211</p>
                    </a>
                </li>
            </ul>
        </div>
    );
};
export default Contact;
