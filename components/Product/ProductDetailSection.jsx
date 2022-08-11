import styles from './ProductDetailSection.module.scss';

import ProductDetailHeaderIntroSection from './ProductDetailHeaderIntroSection';
import ProductDetailTabSection from './ProductDetailTabSection';
import ProductsSliderSection from './ProductsSliderSection';

const ProductDetailSection = ({ product = {}, similarProducts = [] }) => {
    if (!product) {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h3>
                        Không tồn tại sản phẩm này hoặc sản phẩm đã ngừng kinh
                        doanh
                    </h3>
                </div>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ProductDetailHeaderIntroSection product={product} />
                <ProductDetailTabSection product={product} />
                <h3>Sản phẩm tương tự</h3>
                <ProductsSliderSection products={similarProducts} />
            </div>
        </div>
    );
};

export default ProductDetailSection;
