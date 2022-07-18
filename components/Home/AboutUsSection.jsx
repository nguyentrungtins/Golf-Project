import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import styles from './AboutUsSection.module.scss';

const AboutUs = () => (
    <div className={styles.container}>
        {/* TITLE */}
        <div className={styles.title}>
            <p>Fortifies you.</p>
            <p>Its Best, believe in.</p>
        </div>

        {/* CONTENT */}
        <div className={styles.content}>
            <Image
                src="/images/about-us/1.png"
                alt="about-us-image"
                width={484}
                height={588}
                layout="intrinsic"
            />

            <div className={styles.info}>
                <p className={styles.infoHeader}>OUR STORY</p>
                <h2 className={styles.infoTitle}>About Us</h2>
                <p className={styles.infoDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Interdum consectetur libero id faucibus nisl
                    tincidunt. Nec feugiat nisl pretium fusce id velit ut tortor
                    pretium.
                </p>

                <button className={styles.nextbtn}>
                    <BsArrowRight className={styles.nextBtnIcon} />
                </button>
            </div>
        </div>
    </div>
);

export default AboutUs;
