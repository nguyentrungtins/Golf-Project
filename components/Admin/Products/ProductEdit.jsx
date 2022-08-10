import styles from './ProductCreateForm.module.scss';
import Button from '../../Button';
import { IoIosArrowBack } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';

import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { useState, useRef } from 'react';
import {
    randomString,
    toLowerCaseNonAccentVietnamese,
} from '../../../lib/functions';
const ProductEdit = ({ product = null }) => {
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
        _id,
    } = product;
    const [techParameterList, setTechParameterList] = useState([
        { techParameter: '', techParameterContent: '' },
    ]);
    console.log(_id);
    const router = useRouter();

    const textArticleRef = useRef();
    const loadingToast = useRef();
    const productName = useRef();
    const productBrand = useRef('');
    const productOriginalPrice = useRef(0);
    const productSale = useRef(0);
    const finalPrice = useRef(0);
    const productStatus = useRef();
    const [nameValue, setNameValue] = useState(name);
    const [brandValue, setBrandValue] = useState(brand);
    const [statusValue, setStatusValue] = useState(status);
    const [productDescInput, setArticleInput] = useState(desc);
    const [productDescImages, setArticleImages] = useState([]);
    const [productImageSrc, setProductImageSrc] = useState([]);
    const [priceList, setPriceList] = useState(price);
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

    // Ten san pham
    const nameHandler = () => {
        setNameValue(productName.current.value);
    };

    // Hang san xuat
    const brandHandler = () => {
        setBrandValue(productBrand.current.value);
    };
    // Gia san pham
    const priceHandler = () => {
        const priceAfterSale =
            productOriginalPrice.current.value -
            productOriginalPrice.current.value *
                (productSale.current.value / 100);
        setPriceList({
            originalPrice: parseInt(productOriginalPrice.current.value),
            sale: parseInt(productSale.current.value),
            priceAfterSale: priceAfterSale,
        });
    };
    const statusHandler = () => {
        setStatusValue(productStatus.current.value);
    };

    // Danh muc san pham - tag

    const btnTagHandler = (slug, name) => () => {
        if (tagList.length == 0) {
            setTagList([{ slug: slug, name: name }]);
        }
        for (let i = 0; i < tagList.length; i++) {
            if (tagList[i].slug === slug) {
                const newList = tagList.filter((tag) => {
                    return tag.slug != slug;
                });
                setTagList(newList);
                break;
            } else {
                setTagList((prev) => [...prev, { slug: slug, name: name }]);
            }
        }
        // if (tagList.includes(slug)) {
        //     const newList = tagList.filter((tag) => {
        //         return tag != slug;
        //     });
        //     setTagList(newList);
        //     console.log('remove: ', tagList);
        // } else {
        //     setTagList((prev) => [...prev, slug]);
        //     console.log('add: ', tagList);
        // }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!productDescInput || !productName || !productBrand) {
            toast.warn('Vui lòng nhập đầy đủ nội dung sản phẩm');
            return;
        }

        console.log('pass validate');

        // CREATE SLUG
        let slug = nameValue.split(' ').join('-') + '-' + randomString();
        slug = toLowerCaseNonAccentVietnamese(slug).replace(
            /[^0-9a-zA-Z\-]/g,
            ''
        );
        // ADD LOADING TOAST FOR HANDLE CALL API
        loadingToast.current = toast.info('Đang sửa thông tin sản phẩm', {
            autoClose: false,
            closeOnClick: false,
        });
        const techParameterData = techParameterList.map((p) => {
            return { title: p.techParameter, body: p.techParameterContent };
        });
        const data = {
            name: nameValue,
            brand: brandValue,
            price: priceList,
            desc: desc,
            descImg: descImg,
            techParameter: techParameter,
            img: img,
            status: statusValue,
            tag: tag,
            slug: slug,
        };

        const res = await fetch(`/api/products/edit/${_id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            },
        });

        // GET RESULT FROM API
        const result = await res.json();
        console.log(result);
        if (result.success) {
            // router.push('/admin/bulletin');

            // SHOW SUCCESS TOAST
            toast.update(loadingToast.current, {
                render: result.message,
                type: toast.TYPE.SUCCESS,
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                onClose: () => router.push('/admin/products'),
            });
            // toast.success(result.message);
        } else {
            // SHOW ERROR TOAST
            toast.update(loadingToast.current, {
                render: result.message,
                type: toast.TYPE.ERROR,
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Link href="/admin/products">
                    <Button leftIcon={<IoIosArrowBack />}>Trở về</Button>
                </Link>
                <h2>Thêm Sản Phẩm Mới</h2>
                <form onSubmit={onSubmit} method="PUT">
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
                                    value={nameValue}
                                    onChange={nameHandler}
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
                                    value={brandValue}
                                    onChange={brandHandler}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.field}>
                        <h3>Trạng Thái</h3>
                        <div className={styles.fieldGroup}>
                            <div
                                className={classnames(
                                    styles.formControl,
                                    styles.nonBG
                                )}
                            >
                                <div className={styles.select}>
                                    <select
                                        ref={productStatus}
                                        onChange={statusHandler}
                                        value={statusValue}
                                    >
                                        <option value="1">Còn Hàng</option>
                                        <option value="0">Hết Hàng</option>
                                        <option value="-1">
                                            Ngừng Kinh Doanh
                                        </option>
                                    </select>
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
                                    value={priceList.originalPrice}
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
                                    value={priceList.sale}
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
                                    value={priceList.priceAfterSale}
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className={styles.btnSubmit}>
                        Sửa sản phẩm
                    </button>
                    <ToastContainer
                        position="bottom-right"
                        theme="colored"
                        autoClose={5000}
                        hideProgressBar={false}
                        closeOnClick
                        pauseOnHover
                    />
                </form>
            </div>
        </div>
    );
};
export default ProductEdit;
