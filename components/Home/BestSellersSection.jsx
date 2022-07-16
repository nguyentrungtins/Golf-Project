import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { CgArrowLongRight } from 'react-icons/cg';
import { FaDollarSign } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import styles from './BestSellersSection.module.scss';

const BestSellers = () => {
    return (
        <div className={styles.container}>
            {/* HEADER */}
            <div className={styles.bestSellersHeader}>
                <p className={styles.bestSellersMainHeader}>Best Sellers</p>
                <p className={styles.bestSellersSubHeader}>
                    We provide products about golf
                </p>
            </div>

            {/* CATEGORY */}
            <div className={styles.bestSellersCategories}>
                <p className={styles.bestSellersCategoryItem}>All Products</p>
                <p className={styles.bestSellersCategoryItem}>Fair Way</p>
                <p className={styles.bestSellersCategoryItem}>
                    Power
                    <FiChevronDown className={styles.bestSellersCategoryIcon} />
                </p>
                <p className={styles.bestSellersCategoryItem}>
                    Max
                    <FiChevronDown className={styles.bestSellersCategoryIcon} />
                </p>
            </div>

            {/* PRODUCTS */}
            <div className={styles.bestSellersListProducts}>
                <BsChevronLeft className={styles.bestSellersLeftIcon} />
                {/* PRODUCT ITEM */}
                <div className={styles.bestSellersProduct}>
                    <div className={styles.bestSellersProductImageWrap}>
                        <Image
                            className={styles.bestSellersProductImage}
                            src="/images/best-sellers/1.png"
                            alt="Image Product"
                            width="234px"
                            height="215px"
                        />
                    </div>
                    <div className={styles.bestSellersProductInfo}>
                        <p className={styles.bestSellersProductName}>
                            Driver SiM2 Max
                        </p>
                        <p className={styles.bestSellersProductDesc}>
                            Taylor made
                        </p>
                        <div
                            className={
                                styles.bestSellersProductPriceAndEvaluate
                            }
                        >
                            <p className={styles.bestSellersProductPrice}>
                                <FaDollarSign
                                    className={
                                        styles.bestSellersProductPriceIcon
                                    }
                                />
                                30.00
                            </p>
                            <div className={styles.bestSellersProductReview}>
                                <AiFillStar
                                    className={styles.bestSellersProductStar}
                                />
                                <span
                                    className={
                                        styles.bestSellersProductReviewEvaluate
                                    }
                                >
                                    4.9
                                </span>
                                <span
                                    className={
                                        styles.bestSellersProductReviewNumber
                                    }
                                >
                                    (65 reviews)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PRODUCT ITEM */}
                <div className={styles.bestSellersProduct}>
                    <div className={styles.bestSellersProductImageWrap}>
                        <Image
                            className={styles.bestSellersProductImage}
                            src="/images/best-sellers/1.png"
                            alt="Image Product"
                            width="234px"
                            height="215px"
                        />
                    </div>
                    <div className={styles.bestSellersProductInfo}>
                        <p className={styles.bestSellersProductName}>
                            Driver SiM2 Max
                        </p>
                        <p className={styles.bestSellersProductDesc}>
                            Taylor made
                        </p>
                        <div
                            className={
                                styles.bestSellersProductPriceAndEvaluate
                            }
                        >
                            <p className={styles.bestSellersProductPrice}>
                                <FaDollarSign
                                    className={
                                        styles.bestSellersProductPriceIcon
                                    }
                                />
                                30.00
                            </p>
                            <div className={styles.bestSellersProductReview}>
                                <AiFillStar
                                    className={styles.bestSellersProductStar}
                                />
                                <span
                                    className={
                                        styles.bestSellersProductReviewEvaluate
                                    }
                                >
                                    4.9
                                </span>
                                <span
                                    className={
                                        styles.bestSellersProductReviewNumber
                                    }
                                >
                                    (65 reviews)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PRODUCT ITEM */}
                <div className={styles.bestSellersProduct}>
                    <div className={styles.bestSellersProductImageWrap}>
                        <Image
                            className={styles.bestSellersProductImage}
                            src="/images/best-sellers/1.png"
                            alt="Image Product"
                            width="234px"
                            height="215px"
                        />
                    </div>
                    <div className={styles.bestSellersProductInfo}>
                        <p className={styles.bestSellersProductName}>
                            Driver SiM2 Max
                        </p>
                        <p className={styles.bestSellersProductDesc}>
                            Taylor made
                        </p>
                        <div
                            className={
                                styles.bestSellersProductPriceAndEvaluate
                            }
                        >
                            <p className={styles.bestSellersProductPrice}>
                                <FaDollarSign
                                    className={
                                        styles.bestSellersProductPriceIcon
                                    }
                                />
                                30.00
                            </p>
                            <div className={styles.bestSellersProductReview}>
                                <AiFillStar
                                    className={styles.bestSellersProductStar}
                                />
                                <span
                                    className={
                                        styles.bestSellersProductReviewEvaluate
                                    }
                                >
                                    4.9
                                </span>
                                <span
                                    className={
                                        styles.bestSellersProductReviewNumber
                                    }
                                >
                                    (65 reviews)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PRODUCT ITEM */}
                <div className={styles.bestSellersProduct}>
                    <div className={styles.bestSellersProductImageWrap}>
                        <Image
                            className={styles.bestSellersProductImage}
                            src="/images/best-sellers/1.png"
                            alt="Image Product"
                            width="234px"
                            height="215px"
                        />
                    </div>
                    <div className={styles.bestSellersProductInfo}>
                        <p className={styles.bestSellersProductName}>
                            Driver SiM2 Max
                        </p>
                        <p className={styles.bestSellersProductDesc}>
                            Taylor made
                        </p>
                        <div
                            className={
                                styles.bestSellersProductPriceAndEvaluate
                            }
                        >
                            <p className={styles.bestSellersProductPrice}>
                                <FaDollarSign
                                    className={
                                        styles.bestSellersProductPriceIcon
                                    }
                                />
                                30.00
                            </p>
                            <div className={styles.bestSellersProductReview}>
                                <AiFillStar
                                    className={styles.bestSellersProductStar}
                                />
                                <span
                                    className={
                                        styles.bestSellersProductReviewEvaluate
                                    }
                                >
                                    4.9
                                </span>
                                <span
                                    className={
                                        styles.bestSellersProductReviewNumber
                                    }
                                >
                                    (65 reviews)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <BsChevronRight className={styles.bestSellersRightIcon} />
            </div>

            {/* BUTTON */}
            <div className={styles.shopNowBtnWrap}>
                <button className={styles.shopNowBtn}>
                    SHOP NOW{' '}
                    <CgArrowLongRight className={styles.showNowBtnIcon} />
                </button>
            </div>
        </div>
    );
};

export default BestSellers;
