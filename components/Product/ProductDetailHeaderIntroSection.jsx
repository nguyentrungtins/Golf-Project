import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegCheckCircle } from 'react-icons/fa';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';

import styles from './ProductDetailHeaderIntroSection.module.scss';
import Button from '../Button';

const ProductDetailHeaderIntroSection = ({ product = null }) => {
    const { name, price } = product;
    const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.back}>
                <Link href="/products">
                    <Button forIcon>
                        <BiArrowBack />
                    </Button>
                </Link>
            </div>
            <div className={styles.row}>
                {/* IMAGE */}
                <div className={styles.images}>
                    <Slider {...settings} className={styles.slider}>
                        {data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Image
                                        src="/images/products/1.png"
                                        alt="Product Detail Section Image"
                                        width={800}
                                        height={800}
                                        layout="responsive"
                                        priority={true}
                                    />
                                </div>
                            );
                        })}
                    </Slider>
                </div>

                {/* CONTENT */}
                <div className={styles.content}>
                    <h2>{name}</h2>

                    {/* PRICE */}
                    <div className={styles.price}>
                        <div className={styles.quantity}>
                            <span className={styles.currPrice}>
                                {new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                }).format(price.priceAfterSale)}
                            </span>
                            <span className={styles.oldPrice}>
                                {new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                }).format(price.originalPrice)}
                            </span>
                        </div>
                        <p>
                            Trả góp từ{' '}
                            <b>
                                {new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                }).format(2431000)}
                            </b>
                            /tháng
                        </p>
                    </div>

                    {/* COLOR */}
                    <div className={styles.color}>
                        <span>Màu sắc</span>
                        <span>Trắng</span>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    {/* MORE INFO */}
                    <div className={styles.moreInfo}>
                        <div>
                            <span className={styles.icon}>
                                <FaRegCheckCircle />
                            </span>
                            <span className={styles.text}>
                                Thu cũ đổi mới - nâng đời gậy golf
                            </span>
                        </div>
                        <div>
                            <span className={styles.icon}>
                                <FaRegCheckCircle />
                            </span>
                            <span className={styles.text}>
                                Bảo hành chính hãng từ 1-5 năm
                            </span>
                        </div>
                        <div>
                            <span className={styles.icon}>
                                <FaRegCheckCircle />
                            </span>
                            <span className={styles.text}>
                                Bảo dưỡng định kỳ vệ sinh miễn phí
                            </span>
                        </div>
                        <div>
                            <span className={styles.icon}>
                                <FaRegCheckCircle />
                            </span>
                            <span className={styles.text}>
                                Fitting - Thử gậy theo yêu cầu
                            </span>
                        </div>
                        <div>
                            <span className={styles.icon}>
                                <FaRegCheckCircle />
                            </span>
                            <span className={styles.text}>
                                Chỉnh swing và tư vấn bởi đội ngũ HLV cố vấn
                                chuyên gia đầu ngành từ CGV
                            </span>
                        </div>
                        <div>
                            <span className={styles.icon}>
                                <FaRegCheckCircle />
                            </span>
                            <span className={styles.text}>
                                Gọi điện tư vấn 1900.6626 (7:30 - 22:00)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailHeaderIntroSection;
