import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import styles from '../../styles/AboutUs.module.scss';

const AboutUs = () => (
    <div className={styles.container}>
        <div className={styles.title}>
            <p className={styles.titleElement}>Fortifies you.</p>
            <p className={styles.titleElement}>Its Best, believe in.</p>
        </div>

        <div className={styles.content}>
            <div className={[styles.image].join(' ')}>
                <Image
                    src="/images/about-us/1.png"
                    alt="about-us-image"
                    width={484}
                    height={588}
                    layout="intrinsic"
                />
            </div>

            <div className={[styles.info].join(' ')}>
                <p className={styles.infoHeader}>OUR STORY</p>
                <h2 className={styles.infoTitle}>About Us</h2>
                <p className={styles.infoDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Interdum consectetur libero id faucibus nisl
                    tincidunt. Nec feugiat nisl pretium fusce id velit ut tortor
                    pretium.
                </p>

                <div className={styles.nextbtn}>
                    <BsArrowRight />
                </div>
            </div>
        </div>
    </div>
);

export default AboutUs;
