import Image from 'next/image';
import Slider from 'react-slick';
import { AiFillStar } from 'react-icons/ai';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { CgArrowLongRight } from 'react-icons/cg';
import { FaDollarSign } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import styles from './BestSellersSection.module.scss';
import SliderSection from './SliderSection';
import Button from '../Button';

const BestSellers = () => {
    return (
        <div className={styles.container}>
            {/* HEADER */}
            <div className={styles.header}>
                <h2 className={styles.mainHeader}>Best Sellers</h2>
                <p className={styles.subHeader}>
                    We provide products about golf
                </p>
            </div>

            {/* CATEGORY */}
            <div className={styles.categories}>
                <p>All Products</p>
                <p>Fair Way</p>
                <p>
                    Power
                    <FiChevronDown className={styles.categoryIcon} />
                </p>
                <p>
                    Max
                    <FiChevronDown className={styles.categoryIcon} />
                </p>
            </div>

            {/* PRODUCTS */}
            <SliderSection />

            {/* BUTTON */}
            <div className={styles.btnShopNow}>
                <Button rounded rightIcon={<CgArrowLongRight />}>
                    Shop now
                </Button>
            </div>
        </div>
    );
};

export default BestSellers;
