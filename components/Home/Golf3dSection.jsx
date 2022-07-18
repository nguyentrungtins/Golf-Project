import styles from './Golf3dSection.module.scss';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

const Golf3dSection = () => {
    return (
        <div className={styles.container}>
            {/* ROW */}
            <div className={styles.row}>
                <div className={[styles.text, styles.left].join(' ')}>
                    <div className={styles.title}>TRACK YOUR PROGRESS</div>
                    <div className={styles.body}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Interdum consectetur libero id faucibus
                        nisl tincidunt.
                    </div>
                    <div className={styles.body}>
                        Nec feugiat nisl pretium fusce Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Interdum
                        consectetur libero id faucibus nisl.
                    </div>
                </div>
                <div className={[styles.image, styles.right].join(' ')}>
                    <Image
                        src="/images/golf-3d/1.png"
                        alt="golf 3d image"
                        layout="responsive"
                        width={648}
                        height={488}
                    />
                </div>
            </div>

            {/* ROW */}
            <div className={styles.row} style={{ marginTop: '6rem' }}>
                <div className={[styles.image, styles.left].join(' ')}>
                    <Image
                        src="/images/golf-3d/2.png"
                        alt="golf 3d image"
                        width={648}
                        height={493}
                    />
                </div>
                <div className={[styles.text, styles.right].join(' ')}>
                    <div className={styles.title}>ROUND THE CLOCK TRACKING</div>
                    <div className={styles.body}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Interdum consectetur libero id faucibus
                        nisl
                    </div>
                    <div className={styles.nextBtnWrap}>
                        <button className={styles.nextbtn}>
                            <BsArrowRight className={styles.nextBtnIcon} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Golf3dSection;
