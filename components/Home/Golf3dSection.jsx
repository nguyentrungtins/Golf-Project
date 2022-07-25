import styles from './Golf3dSection.module.scss';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

const Golf3dSection = () => {
    return (
        <div className={styles.container}>
            {/* ROW */}
            <div className={styles.row}>
                <div className={[styles.text, styles.left].join(' ')}>
                    <h2>Track Your Progress</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Interdum consectetur libero id faucibus
                        nisl tincidunt.
                    </p>
                    <p>
                        Nec feugiat nisl pretium fusce Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Interdum
                        consectetur libero id faucibus nisl.
                    </p>
                </div>
                <div className={[styles.image, styles.right].join(' ')}>
                    <Image
                        src="/images/home/golf-3d/1.png"
                        alt="golf 3d image"
                        width={544}
                        height={410}
                        layout="responsive"
                    />
                </div>
            </div>

            {/* ROW */}
            <div className={styles.row} style={{ marginTop: '6rem' }}>
                <div className={[styles.image, styles.left].join(' ')}>
                    <Image
                        src="/images/home/golf-3d/2.png"
                        alt="golf 3d image"
                        width={524}
                        height={399}
                        layout="responsive"
                    />
                </div>
                <div className={[styles.text, styles.right].join(' ')}>
                    <h2>Round The Clock Tracking</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Interdum consectetur libero id faucibus
                        nisl
                    </p>
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
