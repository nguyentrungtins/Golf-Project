import styles from './HomeSection.module.scss';
import Navbar from '../Layouts/Navbar';
import scrolldown from '../../public/scrolldown.png';
import Image from 'next/image';
const HomeSection = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.content}>
                <h1>World Class Golf Instruction</h1>
                <button>EXPLORE NOW</button>
            </div>
            <div className={styles.scrollDown}>
                <p>Scroll Down</p>
                <div>
                    <Image src={scrolldown} alt="Logo Image" />
                </div>
            </div>
        </div>
    );
};

export default HomeSection;
