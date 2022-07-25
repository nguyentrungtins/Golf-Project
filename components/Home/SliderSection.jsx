import Slider from 'react-slick';
import Image from 'next/image';

import { FaDollarSign } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import styles from './SliderSection.module.scss';

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SliderSection = () => {
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings} className={styles.sliderInner}>
                {data.map((item, index) => {
                    return (
                        <div className={styles.sliderItem} key={index}>
                            <div className={styles.imgWrap}>
                                <Image
                                    src="/images/best-sellers/1.png"
                                    alt="Image Product"
                                    width={218}
                                    height={202}
                                    layout="responsive"
                                />
                            </div>

                            <div className={styles.info}>
                                <p className={styles.name}>Driver SiM2</p>
                                <p className={styles.desc}>Taylor made</p>
                                <div className={styles.priceAndEvaluate}>
                                    <p className={styles.price}>
                                        <FaDollarSign
                                            className={styles.priceIcon}
                                        />
                                        30.00
                                    </p>
                                    <div className={styles.review}>
                                        <AiFillStar className={styles.star} />
                                        <span className={styles.number}>
                                            4.9
                                        </span>
                                        <span className={styles.reviewNumber}>
                                            (65 reviews)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default SliderSection;
