import Image from 'next/image';
import Slider from 'react-slick';
import { AiFillStar } from 'react-icons/ai';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { CgArrowLongRight } from 'react-icons/cg';
import { FaDollarSign } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import styles from './BestSellersSection.module.scss';
import SliderSection from './SliderSection';

const BestSellers = () => {
    return (
        <div className={styles.container}>
            {/* HEADER */}
            <div className={styles.header}>
                <h3 className={styles.mainHeader}>Best Sellers</h3>
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
            <div className={styles.btnWrap}>
                <button>
                    SHOP NOW <CgArrowLongRight className={styles.btnIcon} />
                </button>
            </div>
        </div>
    );
};

export default BestSellers;
