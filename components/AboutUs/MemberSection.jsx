import styles from './MemberSection.module.scss';
import SliderSection from './SliderSection';

const MemberSection = () => {
    return (
        <div className={styles.wrapper}>
            <h2>ĐỘI NGŨ - CỘNG SỰ</h2>
            <p className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <SliderSection />
        </div>
    );
};

export default MemberSection;
