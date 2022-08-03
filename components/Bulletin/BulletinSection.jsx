import { useState } from 'react';
import Image from 'next/image';
import { BiBookmark } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import styles from './BulletinSection.module.scss';
import Button from '../Button';
import ListBulletinCardSection from './ListBulletinCardSection';

const BulletinSection = ({ bulletins, useSlug }) => {
    const [noOfBulletinShowed, setNoOfBulletinShowed] = useState(4);
    const slices = bulletins.slice(0, noOfBulletinShowed);

    const handleShowMoreBulletin = () => {
        setNoOfBulletinShowed((prev) => prev + 4);
    };

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
            <ListBulletinCardSection bulletins={bulletins} useSlug />

            {/* TRENDING */}
            <h2>Xu hướng</h2>
            <ListBulletinCardSection bulletins={slices} useSlug />

            <div className={styles.seeMoreBtn}>
                <Button
                    onClick={handleShowMoreBulletin}
                    rounded
                    rightIcon={<BsChevronDown />}
                >
                    Xem thêm
                </Button>
            </div>
        </div>
    );
};

export default BulletinSection;
