import Image from 'next/image';
import { BiBookmark } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import styles from './LatestSection.module.scss';
import Button from '../Button';

const LastestSection = () => {
    return (
        <div className={styles.wrapper}>
            {/* LATEST */}
            <h2>Mới nhất</h2>
            <div className={styles.row}>
                <div className={styles.col6}>
                    <div className={styles.imageWrap}>
                        <Image
                            src="/images/news/1.jpg"
                            alt="News Latest Section Image"
                            width={768}
                            height={432}
                            layout="responsive"
                        />
                    </div>
                    <div className={styles.content}>
                        <h3>
                            Thương thân cấp tế bào: cách để &quot;thương&quot;
                            hệ đề kháng
                        </h3>
                        <Button circle sm gtheme>
                            <BiBookmark />
                        </Button>
                    </div>
                    <div className={styles.blur}></div>
                </div>
                <div className={styles.col6}>
                    <div className={styles.imageWrap}>
                        <Image
                            src="/images/news/2.jpg"
                            alt="News Latest Section Image"
                            width={768}
                            height={432}
                            layout="responsive"
                        />
                    </div>
                    <div className={styles.content}>
                        <h3>
                            Black Panther: Wakanda Forever - Di sản sau khi
                            Chadwick Boseman ra đi
                        </h3>
                        <Button circle sm gtheme>
                            <BiBookmark />
                        </Button>
                    </div>
                    <div className={styles.blur}></div>
                </div>
            </div>
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
                        Bùng phát bệnh đậu mùa khỉ: Vì sao số liệu chỉ rơi vào
                        người đồng tính nam?
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
                        Giám đốc ENZ Việt Nam: “Làm mẹ giúp tôi thuần thục kỹ
                        năng cân bằng tài chính”
                    </h3>
                </div>
            </div>

            {/* TRENDING */}
            <h2>Xu hướng</h2>
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
                        Bùng phát bệnh đậu mùa khỉ: Vì sao số liệu chỉ rơi vào
                        người đồng tính nam?
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
                        Giám đốc ENZ Việt Nam: “Làm mẹ giúp tôi thuần thục kỹ
                        năng cân bằng tài chính”
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
                        Bùng phát bệnh đậu mùa khỉ: Vì sao số liệu chỉ rơi vào
                        người đồng tính nam?
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
                        Giám đốc ENZ Việt Nam: “Làm mẹ giúp tôi thuần thục kỹ
                        năng cân bằng tài chính”
                    </h3>
                </div>
            </div>

            <div className={styles.seeMoreBtn}>
                <Button rounded rightIcon={<BsChevronDown />}>
                    Xem thêm
                </Button>
            </div>
        </div>
    );
};

export default LastestSection;
