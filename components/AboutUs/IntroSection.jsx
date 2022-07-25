import styles from './IntroSection.module.scss';
import Image from 'next/image';

const IntroSection = () => {
    return (
        <div className={styles.wrapper}>
            <h2>CGV Golf</h2>
            <div className={styles.content}>
                <div className={styles.body}>
                    <p className={styles.para}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Interdum consectetur libero id faucibus
                        nisl tincidunt. Nec feugiat nisl pretium fusce id velit
                        ut tortor pretium.
                    </p>
                    <p className={styles.para}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Interdum consectetur libero id faucibus
                        nisl tincidunt. Nec feugiat nisl pretium fusce id velit
                        ut tortor pretium.
                    </p>
                </div>
                <div className={styles.imageWrap}>
                    <Image
                        src="/images/about-us/intro/1.png"
                        alt="About Us Intro Section Image"
                        width={504}
                        height={402}
                        layout="responsive"
                    />
                </div>
            </div>
        </div>
    );
};

export default IntroSection;
