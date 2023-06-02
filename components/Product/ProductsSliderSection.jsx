import Slider from 'react-slick';
import Image from 'next/image';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import styles from './ProductsSliderSection.module.scss';

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const ProductsSliderSection = () => {
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
                {data.map((item, index) => {
                    return (
                        <div className={styles.item} key={index}>
                            <div className={styles.imgWrap}>
                                <Image
                                    src="/images/home/best-sellers/1.png"
                                    alt="Image Product"
                                    width={218}
                                    height={202}
                                    layout="responsive"
                                />
                            </div>

                            <div className={styles.info}>
                                <p className={styles.name}>
                                    Driver SiM2 ({item})
                                </p>
                                <p className={styles.desc}>Taylor made</p>
                                <div className={styles.price}>
                                    <span className={styles.currPrice}>
                                        {new Intl.NumberFormat('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND',
                                        }).format(10000000)}
                                    </span>
                                    <span className={styles.oldPrice}>
                                        {new Intl.NumberFormat('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND',
                                        }).format(10000000)}
                                    </span>
                                </div>
                                <span className={styles.discount}>
                                    Giảm 10%
                                </span>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default ProductsSliderSection;
