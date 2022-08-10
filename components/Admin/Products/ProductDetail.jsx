import styles from './ProductCreateForm.module.scss';
import Button from '../../Button';
import { IoIosArrowBack } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import { BsUpload } from 'react-icons/bs';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import Link from 'next/link';
import { useRouter } from 'next/router';
import ButtonToggle from '../../Button/ButtonToggle';
import classnames from 'classnames';
import { useState, useRef } from 'react';

const ProductDetail = ({ product = null }) => {
    const {
        name,
        brand,
        tag,
        status,
        techParameter,
        price,
        desc,
        descImg,
        img,
        createdAt,
        mainImg,
    } = product;
    const [techParameterList, setTechParameterList] = useState([
        { techParameter: '', techParameterContent: '' },
    ]);

    const router = useRouter();

    const textArticleRef = useRef();
    const loadingToast = useRef();
    const productName = name;
    const productBrand = brand;
    // const productOriginalPrice = price.originalPrice;
    // const productSale = price.sale;
    // const finalPrice = price.priceAfterSale;
    // const [price, setPrice] = useState(0);
    const [productDescInput, setArticleInput] = useState('');
    const [productDescImages, setArticleImages] = useState([]);
    const [productImageSrc, setProductImageSrc] = useState([]);
    // const [priceList, setPriceList] = useState({});
    const [tagList, setTagList] = useState([]);
    if (!product) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Link href="/admin/products">
                        <Button leftIcon={<IoIosArrowBack />}>Trở về</Button>
                    </Link>

                    <h2>Khong tim thay san pham</h2>
                </div>
            </div>
        );
    }

    // console.log(product);
    let statusName;
    if (status == 1) {
        statusName = 'Còn hàng';
    } else if (status == 0) {
        statusName = 'Hết hàng';
    } else if (status == -1) {
        statusName = 'Ngừng kinh doanh';
    }

    // Tag data

    const onSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Link href="/admin/products">
                    <Button leftIcon={<IoIosArrowBack />}>Trở về</Button>
                </Link>

                <h2>Chi tiết sản phẩm: {name}</h2>
                <form onSubmit={onSubmit} method="POST">
                    <div className={styles.field}>
                        <h3>Thông tin chính</h3>
                        <div className={styles.fieldGroup}>
                            <div className={styles.formControl}>
                                <label
                                    className={styles.label}
                                    htmlFor="productName"
                                >
                                    Tên sản phẩm
                                </label>
                                <input
                                    disabled={true}
                                    type="text"
                                    id="productName"
                                    placeholder="Gậy golf TaylorMade"
                                    className={styles.input}
                                    name="name"
                                    value={name}
                                />
                            </div>

                            <div className={styles.formControl}>
                                <label
                                    className={styles.label}
                                    htmlFor="productProvider"
                                >
                                    Hãng sản xuất
                                </label>
                                <input
                                    disabled={true}
                                    type="text"
                                    id="productBrand"
                                    placeholder="TaylorMade"
                                    className={styles.input}
                                    name="brand"
                                    value={brand}
                                />
                            </div>
                            <div className={styles.formControl}>
                                <label
                                    className={styles.label}
                                    htmlFor="productProvider"
                                >
                                    Trạng thái
                                </label>
                                <input
                                    disabled={true}
                                    type="text"
                                    id="productBrand"
                                    placeholder="TaylorMade"
                                    className={styles.input}
                                    name="brand"
                                    value={statusName}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.field}>
                        <h3>Danh mục sản phẩm</h3>
                        <div className={styles.fieldGroup}>
                            <div
                                className={classnames(
                                    styles.formControl,
                                    styles.nonBG
                                )}
                            >
                                <div className={styles.btnToggleWrapper}>
                                    {tag.map((tag, index) => {
                                        return (
                                            <div key={index}>
                                                <ButtonToggle
                                                    name={tag.name}
                                                    fixed={true}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.field}>
                        <h3>Giá </h3>
                        <div className={styles.fieldGroup}>
                            <div className={styles.formControl}>
                                <label
                                    className={styles.label}
                                    htmlFor="productOriginalPrice"
                                >
                                    Giá gốc
                                </label>
                                <input
                                    disabled={true}
                                    type="number"
                                    id="productOriginalPrice"
                                    className={styles.input}
                                    value={price.originalPrice}
                                />
                            </div>
                            <div className={styles.formControl}>
                                <label
                                    className={styles.label}
                                    htmlFor="productSale"
                                >
                                    Giảm giá (%)
                                </label>
                                <input
                                    disabled={true}
                                    type="number"
                                    id="productSale"
                                    className={styles.input}
                                    value={price.sale}
                                />
                            </div>
                            <div className={styles.formControl}>
                                <label
                                    className={styles.label}
                                    htmlFor="productSale"
                                >
                                    Sau giảm giá
                                </label>
                                <input
                                    disabled={true}
                                    type="number"
                                    id="finalPrice"
                                    placeholder="1800000"
                                    className={styles.input}
                                    value={price.priceAfterSale}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.field}>
                        <h3>Ảnh sản phẩm (ảnh chính)</h3>
                        <div className={styles.fieldGroup}>
                            <div className={styles.product}>
                                <div className={styles.imgList}>
                                    <img
                                        src={mainImg.url}
                                        className={styles.imgItem}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.field}>
                        <h3>Ảnh sản phẩm (ảnh phụ)</h3>
                        <div className={styles.fieldGroup}>
                            <div className={styles.product}>
                                <div className={styles.imgList}>
                                    {img.map((singleImg, i) => {
                                        return (
                                            <img
                                                key={i}
                                                src={singleImg.url}
                                                className={styles.imgItem}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.field}>
                        <h3>Mô tả sản phẩm</h3>
                        <div className={styles.fieldGroup}>
                            <div
                                className={classnames(
                                    styles.formControl,
                                    styles.textarea
                                )}
                            >
                                <textarea
                                    ref={textArticleRef}
                                    type="text"
                                    // className={styles.productDesc}
                                    placeholder="Nội dung ..."
                                    value={desc}
                                    disabled={true}
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className={styles.field}>
                        <h3>Thông số kỹ thuật</h3>
                        {techParameter.map((singleTechParameter, index) => (
                            <div
                                key={index}
                                className={classnames(
                                    styles.fieldGroup,
                                    styles.techParameterGroup
                                )}
                            >
                                <div
                                    className={classnames(
                                        styles.formControl,
                                        styles.techParameter
                                    )}
                                >
                                    <input
                                        disabled={true}
                                        type="text"
                                        className={styles.inputLabel}
                                        name="techParameter"
                                        placeholder="Thống số"
                                        value={singleTechParameter.title}
                                    />
                                    <input
                                        disabled={true}
                                        type="text"
                                        className={styles.input}
                                        name="techParameterContent"
                                        placeholder="Nội dung thông số"
                                        value={singleTechParameter.body}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        </div>
    );
};
export default ProductDetail;
