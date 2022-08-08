import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import styles from './BulletinSection.module.scss';
import Button from '../Button';
import ListBulletinCardCol3Section from './ListBulletinCardCol3Section';
import ListBulletinsCardCol6Section from './ListBulletinsCardCol6Section';

const BulletinSection = ({ bulletins = [], useSlug = false }) => {
    const [noOfTrendBulletins, setNoOfTrendBulletins] = useState(4);
    const noOfBigNewestBulletins = 2;
    const noOfSmallNewestBulletins = 4;

    const bigNewestBulletins = bulletins.slice(0, noOfBigNewestBulletins);
    const smallNewestBulletins = bulletins.slice(
        noOfBigNewestBulletins,
        noOfBigNewestBulletins + noOfSmallNewestBulletins
    );
    const trendBulletins = bulletins.slice(
        noOfBigNewestBulletins + noOfSmallNewestBulletins,
        noOfBigNewestBulletins + noOfSmallNewestBulletins + noOfTrendBulletins
    );

    const handleShowMoreBulletin = () => {
        setNoOfTrendBulletins((prev) => prev + 4);
    };

    return (
        <div className={styles.wrapper}>
            {/* LATEST */}
            <h2>Mới nhất</h2>

            {/* BIG */}
            <ListBulletinsCardCol6Section bulletins={bigNewestBulletins} />

            {/* SMALL */}
            <ListBulletinCardCol3Section
                bulletins={smallNewestBulletins}
                useSlug
            />

            {/* TRENDING */}
            <h2>Xu hướng</h2>
            <ListBulletinCardCol3Section bulletins={trendBulletins} useSlug />

            <div className={styles.seeMoreBtn}>
                {noOfBigNewestBulletins +
                    noOfSmallNewestBulletins +
                    noOfTrendBulletins <
                    bulletins.length && (
                    <Button
                        onClick={handleShowMoreBulletin}
                        rounded
                        rightIcon={<BsChevronDown />}
                    >
                        Xem thêm
                    </Button>
                )}
            </div>
        </div>
    );
};

export default BulletinSection;
