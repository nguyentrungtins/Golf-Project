import styles from './MemberSection.module.scss';
import AboutUsSliderSection from './AboutUsSliderSection';

const MemberSection = () => {
    return (
        <div className={styles.wrapper}>
            <h2>Đội Ngũ - Cộng Sự</h2>
            <p className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <AboutUsSliderSection />
        </div>
    );
};

export default MemberSection;
