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
import {
    randomString,
    toLowerCaseNonAccentVietnamese,
} from '../../../lib/functions';
import Image from 'next/image';

const ProductDetail = (props) => {
    const [techParameterList, setTechParameterList] = useState([
        { techParameter: '', techParameterContent: '' },
    ]);

    const router = useRouter();

    const textArticleRef = useRef();
    const loadingToast = useRef();
    const productName = useRef('');
    const productBrand = useRef('');
    const productOriginalPrice = useRef(0);
    const productSale = useRef(0);
    const finalPrice = useRef(0);
    const [price, setPrice] = useState(0);
    const [productDescInput, setArticleInput] = useState('');
    const [productDescImages, setArticleImages] = useState([]);
    const [productImageSrc, setProductImageSrc] = useState([]);
    const [priceList, setPriceList] = useState({});
    const [tagList, setTagList] = useState([]);

    // Tag data

    const tagData = [
        {
            slug: 'gay-golf',
            name: 'Gậy golf',
        },
        {
            slug: 'gay-golf-nam',
            name: 'Gậy golf nam',
        },
        {
            slug: 'gay-golf-nu',
            name: 'Gậy golf nữ',
        },
        {
            slug: 'thoi-trang',
            name: 'Thời trang',
        },
        {
            slug: 'ao-golf-nam',
            name: 'Áo golf nam',
        },
        {
            slug: 'ao-golf-nu',
            name: 'Áo golf nữ',
        },
        {
            slug: 'quan-golf-nam',
            name: 'Quần golf nam',
        },
        {
            slug: 'quan-golf-nu',
            name: 'Quần golf nữ',
        },
        {
            slug: 'vay-golf-nu',
            name: 'Váy golf nữ',
        },
        {
            slug: 'phu-kien-golf',
            name: 'Phụ kiện golf',
        },
        {
            slug: 'gang-tay-golf',
            name: 'Găng tay golf',
        },
        {
            slug: 'du-golf',
            name: 'Dù golf',
        },
        {
            slug: 'vo-golf',
            name: 'Vớ golf',
        },
        {
            slug: 'may-3d-golf',
            name: 'Máy golf 3D',
        },
        {
            slug: 'cigar',
            name: 'Cigar',
        },
        {
            slug: 'ruou-vang',
            name: 'Rượu vang',
        },
        {
            slug: 'khac',
            name: 'Khác',
        },
    ];

    const onSubmit = async (e) => {
        e.preventDefault();
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Link href="/admin/products">
                    <Button leftIcon={<IoIosArrowBack />}>Trở về</Button>
                </Link>
                <h2>Thêm Sản Phẩm Mới</h2>
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
                                    type="text"
                                    id="productName"
                                    placeholder="Gậy golf TaylorMade"
                                    className={styles.input}
                                    name="name"
                                    ref={productName}
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
                                    type="text"
                                    id="productBrand"
                                    placeholder="TaylorMade"
                                    className={styles.input}
                                    name="brand"
                                    ref={productBrand}
                                />
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.field}>
                        <h3>Danh mục sản phẩm</h3>
                        <div className={styles.fieldGroup}>
                            <div
                                className={classnames(
                                    styles.formControl,
                                    styles.nonBG
                                )}
                            >
                                <div className={styles.select}>
                                    <select>
                                        <option value="1"></option>
                                        <option value="2">Hết Hàng</option>
                                        <option value="3">
                                            Ngừng Kinh Doanh
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div> */}

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
                                    {tagData.map(({ slug, name }) => {
                                        return (
                                            <div
                                                onClick={btnTagHandler(slug)}
                                                key={slug}
                                            >
                                                <ButtonToggle name={name} />
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
                                    type="number"
                                    id="productOriginalPrice"
                                    placeholder="2000000"
                                    className={styles.input}
                                    name="productOriginalPrice"
                                    onChange={priceHandler}
                                    ref={productOriginalPrice}
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
                                    type="number"
                                    id="productSale"
                                    onChange={priceHandler}
                                    placeholder="10%"
                                    className={styles.input}
                                    name="productSale"
                                    ref={productSale}
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
                                    type="number"
                                    id="finalPrice"
                                    placeholder="1800000"
                                    className={styles.input}
                                    name="finalPrice"
                                    ref={finalPrice}
                                    disabled={true}
                                    value={price}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.field}>
                        <h3>Ảnh sản phẩm</h3>
                        <div className={styles.fieldGroup}>
                            <div
                                className={styles.product}
                                style={{
                                    backgroundImage: `url("${productImageSrc.src}")`,
                                }}
                            >
                                <div className={styles.imgList}>
                                    {productImageSrc.map((img, i) => {
                                        return (
                                            <img
                                                key={i}
                                                src={img.src}
                                                className={styles.imgItem}
                                            />
                                        );
                                    })}
                                </div>
                                <div className={styles.options}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id="product-upload"
                                        hidden
                                        multiple
                                        onChange={handleOnChangeImgInput}
                                    />
                                    <label
                                        htmlFor="product-upload"
                                        className={styles.btn}
                                    >
                                        <Button
                                            forLabel
                                            rightIcon={<BsUpload />}
                                        >
                                            Chọn ảnh
                                        </Button>
                                    </label>
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
                                    value={productDescInput}
                                    onChange={(e) =>
                                        setArticleInput(e.target.value)
                                    }
                                ></textarea>
                            </div>
                            <div className={styles.options}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="image-upload"
                                    hidden
                                    onChange={handleOnChangeImageInput}
                                />
                                <label
                                    htmlFor="image-upload"
                                    className={styles.btn}
                                >
                                    <Button forLabel rightIcon={<BsUpload />}>
                                        Chèn ảnh
                                    </Button>
                                </label>

                                <ToastContainer
                                    position="bottom-right"
                                    theme="colored"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    closeOnClick
                                    pauseOnHover
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.field}>
                        <h3>Thông số kỹ thuật</h3>
                        {techParameterList.map((singleTechParameter, index) => (
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
                                        type="text"
                                        className={styles.inputLabel}
                                        name="techParameter"
                                        placeholder="Thống số"
                                        value={
                                            singleTechParameter.techParameter
                                        }
                                        onChange={(e) =>
                                            handleTechParameterChange(e, index)
                                        }
                                    />
                                    <input
                                        type="text"
                                        className={styles.input}
                                        name="techParameterContent"
                                        placeholder="Nội dung thông số"
                                        value={
                                            singleTechParameter.techParameterContent
                                        }
                                        onChange={(e) =>
                                            handleTechParameterChange(e, index)
                                        }
                                    />
                                    {techParameterList.length !== 1 && (
                                        <span
                                            onClick={() =>
                                                handleTechParameterRemove(index)
                                            }
                                        >
                                            <AiOutlineMinus />
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}

                        <span className={styles.addInput}>
                            <AiOutlinePlus onClick={handleTechParameterAdd} />
                        </span>
                    </div>

                    <button type="submit" className={styles.btnSubmit}>
                        Tạo Sản Phẩm Mới
                    </button>
                </form>
            </div>
        </div>
    );
};
export default ProductDetail;
