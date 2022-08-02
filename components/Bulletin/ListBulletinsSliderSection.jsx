import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import styles from './ListBulletinsSliderSection.module.scss';

const ListBulletinsSliderSection = ({ bulletins }) => {
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
            <h2>Xem thêm</h2>
            <Slider {...settings} className={styles.slider}>
                {bulletins.map((bulletin) => {
                    return (
                        <Link
                            href={`/bulletins/${bulletin.slug.toString()}`}
                            key={bulletin._id.toString()}
                        >
                            <div className={styles.item}>
                                <div className={styles.imageWrap}>
                                    <Image
                                        src={bulletin.banner.url}
                                        alt="News Latest Section Image"
                                        width={768}
                                        height={432}
                                        layout="responsive"
                                    />
                                </div>
                                <h3>{bulletin.title}</h3>
                            </div>
                        </Link>
                    );
                })}
            </Slider>
        </div>
    );
};

export default ListBulletinsSliderSection;
