import Image from 'next/image';
import styles from './PartnerSection.module.scss';

const PartnerSection = () => {
    return (
        <div className={styles.wrapper}>
            <h2>ĐỐI TÁC CỦA CHÚNG TÔI</h2>
            <div className={styles.row}>
                <div className={styles.item}>
                    <div>
                        <Image
                            src="/images/about-us/partner/image 37.png"
                            alt="About Us Partner Image"
                            width={240}
                            height={120}
                            layout="responsive"
                        />
                    </div>
                    <p>Behring Companies</p>
                </div>
                <div className={styles.item}>
                    <div>
                        <Image
                            src="/images/about-us/partner/image 37.png"
                            alt="About Us Partner Image"
                            width={240}
                            height={120}
                            layout="responsive"
                        />
                    </div>
                    <p>Behring Companies</p>
                </div>
                <div className={styles.item}>
                    <div>
                        <Image
                            src="/images/about-us/partner/image 37.png"
                            alt="About Us Partner Image"
                            width={240}
                            height={120}
                            layout="responsive"
                        />
                    </div>
                    <p>Behring Companies</p>
                </div>
                <div className={styles.item}>
                    <div>
                        <Image
                            src="/images/about-us/partner/image 37.png"
                            alt="About Us Partner Image"
                            width={240}
                            height={120}
                            layout="responsive"
                        />
                    </div>
                    <p>Behring Companies</p>
                </div>
                <div className={styles.item}>
                    <div>
                        <Image
                            src="/images/about-us/partner/image 37.png"
                            alt="About Us Partner Image"
                            width={240}
                            height={120}
                            layout="responsive"
                        />
                    </div>
                    <p>Behring Companies</p>
                </div>
                <div className={styles.item}>
                    <div>
                        <Image
                            src="/images/about-us/partner/image 37.png"
                            alt="About Us Partner Image"
                            width={240}
                            height={120}
                            layout="responsive"
                        />
                    </div>
                    <p>Behring Companies</p>
                </div>
            </div>
        </div>
    );
};

export default PartnerSection;
