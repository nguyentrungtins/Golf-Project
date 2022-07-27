import Image from 'next/image';
import styles from './ListNewsCardSection.module.scss';

const ListNewsCardSection = () => {
    return (
        <div className={styles.row}>
            <div className={styles.col3}>
                <div className={styles.imageWrap}>
                    <Image
                        src="/images/news/3.jpg"
                        alt="News Latest Section Image"
                        width={768}
                        height={432}
                        layout="responsive"
                    />
                </div>
                <h3>
                    Bùng phát bệnh đậu mùa khỉ: Vì sao số liệu chỉ rơi vào người
                    đồng tính nam?
                </h3>
            </div>
            <div className={styles.col3}>
                <div className={styles.imageWrap}>
                    <Image
                        src="/images/news/4.jpg"
                        alt="News Latest Section Image"
                        width={768}
                        height={432}
                        layout="responsive"
                    />
                </div>
                <h3>3 Điều bạn đang hiểu sai về “deep work”</h3>
            </div>
            <div className={styles.col3}>
                <div className={styles.imageWrap}>
                    <Image
                        src="/images/news/5.jpg"
                        alt="News Latest Section Image"
                        width={768}
                        height={432}
                        layout="responsive"
                    />
                </div>
                <h3>
                    Mang giày, mang túi với 5 thương hiệu Việt vừa xinh, vừa
                    &quot;xanh&quot;
                </h3>
            </div>
            <div className={styles.col3}>
                <div className={styles.imageWrap}>
                    <Image
                        src="/images/news/6.jpg"
                        alt="News Latest Section Image"
                        width={768}
                        height={432}
                        layout="responsive"
                    />
                </div>
                <h3>
                    Giám đốc ENZ Việt Nam: “Làm mẹ giúp tôi thuần thục kỹ năng
                    cân bằng tài chính”
                </h3>
            </div>
            <div className={styles.col3}>
                <div className={styles.imageWrap}>
                    <Image
                        src="/images/news/3.jpg"
                        alt="News Latest Section Image"
                        width={768}
                        height={432}
                        layout="responsive"
                    />
                </div>
                <h3>
                    Bùng phát bệnh đậu mùa khỉ: Vì sao số liệu chỉ rơi vào người
                    đồng tính nam?
                </h3>
            </div>
            <div className={styles.col3}>
                <div className={styles.imageWrap}>
                    <Image
                        src="/images/news/4.jpg"
                        alt="News Latest Section Image"
                        width={768}
                        height={432}
                        layout="responsive"
                    />
                </div>
                <h3>3 Điều bạn đang hiểu sai về “deep work”</h3>
            </div>
            <div className={styles.col3}>
                <div className={styles.imageWrap}>
                    <Image
                        src="/images/news/5.jpg"
                        alt="News Latest Section Image"
                        width={768}
                        height={432}
                        layout="responsive"
                    />
                </div>
                <h3>
                    Mang giày, mang túi với 5 thương hiệu Việt vừa xinh, vừa
                    &quot;xanh&quot;
                </h3>
            </div>
            <div className={styles.col3}>
                <div className={styles.imageWrap}>
                    <Image
                        src="/images/news/6.jpg"
                        alt="News Latest Section Image"
                        width={768}
                        height={432}
                        layout="responsive"
                    />
                </div>
                <h3>
                    Giám đốc ENZ Việt Nam: “Làm mẹ giúp tôi thuần thục kỹ năng
                    cân bằng tài chính”
                </h3>
            </div>
        </div>
    );
};

export default ListNewsCardSection;
