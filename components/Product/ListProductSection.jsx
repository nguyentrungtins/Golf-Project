import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ListProductSection.module.scss';
import Button from '../Button';
import { ImSortAmountDesc, ImSortAmountAsc } from 'react-icons/im';
import { TbDiscount } from 'react-icons/tb';
import { BsChevronDown } from 'react-icons/bs';

const ListProductSection = ({ products = [], useSlug = false, title = '' }) => {
    const [numOfProductsShowed, setNumOfProductsShowed] = useState(8);
    return (
        <div className={styles.wrapper}>
            <h3>{title || 'Tất cả sản phẩm'}</h3>

            {/* LIST PRODUCTS */}

            {products.length === 0 ? (
                <p className={styles.noProdMessage}>
                    Hiện không có sản phẩm nào
                </p>
            ) : (
                <div>
                    {/* BUTTONS */}
                    <div className={styles.btns}>
                        <Button active leftIcon={<ImSortAmountDesc />}>
                            Giá cao - thấp
                        </Button>
                        <Button leftIcon={<ImSortAmountAsc />}>
                            Giá thấp - cao
                        </Button>
                        <Button leftIcon={<TbDiscount />}>Khuyến mãi</Button>
                    </div>
                    <div className={styles.row}>
                        {products.map((product) => (
                            <Link
                                key={product._id.toString()}
                                href={
                                    useSlug
                                        ? `/san-pham/${product.slug.toString()}`
                                        : `/san-pham/${product._id.toString()}`
                                }
                            >
                                <div className={styles.col}>
                                    <div className={styles.sliderItem}>
                                        <div className={styles.imgWrap}>
                                            <Image
                                                src={product.mainImg.url}
                                                alt="product.mainImg.name"
                                                width={218}
                                                height={202}
                                                layout="responsive"
                                            />
                                        </div>
                                        <div className={styles.info}>
                                            <p className={styles.name}>
                                                {product.name}
                                            </p>
                                            <p className={styles.desc}>
                                                {product.brand}
                                            </p>
                                            <div className={styles.price}>
                                                <span
                                                    className={styles.currPrice}
                                                >
                                                    {new Intl.NumberFormat(
                                                        'vi-VN',
                                                        {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        }
                                                    ).format(
                                                        product.price
                                                            .priceAfterSale
                                                    )}
                                                </span>
                                                <span
                                                    className={styles.oldPrice}
                                                >
                                                    {new Intl.NumberFormat(
                                                        'vi-VN',
                                                        {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        }
                                                    ).format(
                                                        product.price
                                                            .originalPrice
                                                    )}
                                                </span>
                                            </div>
                                            {parseInt(product.price.sale) >
                                                0 && (
                                                <span
                                                    className={styles.discount}
                                                >
                                                    Giảm {product.price.sale}%
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {numOfProductsShowed < products.length && (
                <div className={styles.btnSeeMore}>
                    <Button rounded rightIcon={<BsChevronDown />}>
                        Xem thêm
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ListProductSection;
