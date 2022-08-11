import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import styles from './ProductsSliderSection.module.scss';

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ProductsSliderSection = ({ products = [] }) => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <BsChevronLeft {...props} className={styles.prevIcon} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <BsChevronRight {...props} className={styles.nextIcon} />
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <div className={styles.wrapper}>
            <Slider {...settings} className={styles.slider}>
                {products.map((product) => {
                    return (
                        <Link
                            key={product._id.toString()}
                            href={`/san-pham/${product.slug.toString()}`}
                        >
                            <div className={styles.item}>
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
                                        <span className={styles.currPrice}>
                                            {new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(
                                                product.price.priceAfterSale
                                            )}
                                        </span>
                                        <span className={styles.oldPrice}>
                                            {new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(
                                                product.price.originalPrice
                                            )}
                                        </span>
                                    </div>
                                    {parseInt(product.price.sale) > 0 && (
                                        <span className={styles.discount}>
                                            Giảm {product.price.sale}%
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </Slider>
        </div>
    );
};

export default ProductsSliderSection;
