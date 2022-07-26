import styles from './ProductDetailSection.module.scss';

import ProductDetailHeaderIntroSection from './ProductDetailHeaderIntroSection';
import ProductDetailTabSection from './ProductDetailTabSection';
import ProductsSliderSection from './ProductsSliderSection';

const ProductDetailSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ProductDetailHeaderIntroSection />
                <ProductDetailTabSection />
                <h3>Sản phẩm tương tự</h3>
                <ProductsSliderSection />
            </div>
        </div>
    );
};

export default ProductDetailSection;
