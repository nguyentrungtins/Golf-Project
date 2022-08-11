import { CgArrowLongRight } from 'react-icons/cg';
import { FiChevronDown } from 'react-icons/fi';
import styles from './BestSellersSection.module.scss';
import Button from '../Button';
import ProductsSliderSection from '../Product/ProductsSliderSection';

const BestSellers = ({ discountProducts = [] }) => {
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
            <ProductsSliderSection products={discountProducts} />

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
