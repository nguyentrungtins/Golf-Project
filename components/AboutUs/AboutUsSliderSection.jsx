import styles from './AboutUsSliderSection.module.scss';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Slider from 'react-slick';
import Image from 'next/image';

const AboutUsSliderSection = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <BsChevronLeft {...props} className={styles.prevIcon} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <BsChevronRight {...props} className={styles.nextIcon} />
    );

    const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
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
        <div className={styles.wrapper}>
            <Slider {...settings} className={styles.sliderInner}>
                {data.map((item, index) => {
                    return (
                        <div className={styles.sliderItem} key={index}>
                            <div
                                className={styles.imgProfileWrap}
                                style={{ overflow: 'hidden' }}
                            >
                                <Image
                                    src="/images/about-us/member/image 31.png"
                                    alt="Image Product"
                                    width={285}
                                    height={285}
                                    layout="responsive"
                                    objectFit="cover"
                                />
                            </div>

                            <div className={styles.info}>
                                <p className={styles.name}>Johnny Depp </p>
                                <p className={styles.position}>Manager</p>
                                <p className={styles.desc}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et.
                                </p>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default AboutUsSliderSection;
