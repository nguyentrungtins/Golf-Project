import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import styles from './AboutUsSection.module.scss';

const AboutUs = () => (
    <div className={styles.container}>
        {/* TITLE */}
        <div className={styles.title}>
            <h3>Fortifies you.</h3>
            <h3>Its Best, believe in.</h3>
        </div>

        {/* CONTENT */}
        <div className={styles.content}>
            <div className={styles.imgWrap}>
                <Image
                    src="/images/home/about-us/1.png"
                    alt="about-us-image"
                    width={455}
                    height={551}
                    layout="responsive"
                />
            </div>

            <div className={styles.info}>
                <p className={styles.infoHeader}>OUR STORY</p>
                <h4 className={styles.infoTitle}>About Us</h4>
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
