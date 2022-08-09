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

const ProductCreateForm = () => {
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
    const [productMainImageSrc, setProductMainImageSrc] = useState({});
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
        setPrice(priceAfterSale);
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

    // Mo ta san pham
    const handleOnChangeImageInput = (e) => {
        const file = e.target.files[0];
        if (file && file.type.includes('image')) {
            // CHECK FILE SIZE (< 10MB)
            if (file.size > 10 * 1024 * 1024) {
                toast.warn(
                    'Kích thước file vượt quá kích thước cho phép (< 10MB)'
                );
                return;
            }

            // SET IMAGE NAME
            let date = new Date();
            let imageName =
                date.getDate() + date.getTime() + randomString() + file.name;

            // READ FILE
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setArticleImages((prev) => [
                    ...prev,
                    { name: imageName, src: reader.result },
                ]);
            };
            reader.onerror = () => {
                console.error('AHHHHHHHH!!');
                setErrMsg('something went wrong!');
            };

            // CHANGE STATE OF ARTICLE INPUT VALUE
            const curPos = textArticleRef.current.selectionStart;
            const textToInsert = `\n!Image[${imageName}]\n`;
            setArticleInput(
                (prev) =>
                    prev.slice(0, curPos) + textToInsert + prev.slice(curPos)
            );
        }
    };

    // Thong tin ky thuat san pham

    const handleTechParameterChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...techParameterList];
        list[index][name] = value;
        setTechParameterList(list);
    };

    const handleTechParameterRemove = (index) => {
        const list = [...techParameterList];
        list.splice(index, 1);
        setTechParameterList(list);
    };

    const handleTechParameterAdd = () => {
        setTechParameterList([
            ...techParameterList,
            { techParameter: '', techParameterContent: '' },
        ]);
    };

    const handleOnChangeImgInput = (e) => {
        // console.log(file.size);

        // CHECK FILE TYPE
        setProductImageSrc([]);
        let file;
        for (let i = 0; i < e.target.files.length; i++) {
            file = e.target.files[i];
            if (file && file.type.includes('image')) {
                // CHECK FILE SIZE (< 10MB)
                if (file.size > 10 * 1024 * 1024) {
                    toast.warn(
                        'Kích thước file vượt quá kích thước cho phép (< 10MB)'
                    );
                    return;
                }
                // SET IMAGE NAME
                let date = new Date();
                let imageName =
                    date.getDate() +
                    date.getTime() +
                    randomString() +
                    file.name;
                // READ FILE
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    setProductImageSrc((prev) => [
                        ...prev,
                        { name: imageName, src: reader.result },
                    ]);
                };
                reader.onerror = () => {
                    console.error('AHHHHHHHH!!');
                    setErrMsg('something went wrong!');
                };
            }
        }
    };

    const handleOnChangeMainImgInput = (e) => {
        // console.log(file.size);

        // CHECK FILE TYPE
        setProductMainImageSrc({});
        let file;
        file = e.target.files[0];
        if (file && file.type.includes('image')) {
            // CHECK FILE SIZE (< 10MB)
            if (file.size > 10 * 1024 * 1024) {
                toast.warn(
                    'Kích thước file vượt quá kích thước cho phép (< 10MB)'
                );
                return;
            }
            // SET IMAGE NAME
            let date = new Date();
            let imageName =
                date.getDate() + date.getTime() + randomString() + file.name;
            // READ FILE
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setProductMainImageSrc({ name: imageName, src: reader.result });
            };
            reader.onerror = () => {
                console.error('AHHHHHHHH!!');
                setErrMsg('something went wrong!');
            };
        }
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!productDescInput) {
            toast.warn('Vui lòng nhập nội dung tin');
            return;
        }

        console.log('pass validate');

        // ADD LOADING TOAST FOR HANDLE CALL API
        loadingToast.current = toast.info('Đang tạo sản phẩm mới', {
            autoClose: false,
            closeOnClick: false,
        });
        const techParameterData = techParameterList.map((p) => {
            return { title: p.techParameter, body: p.techParameterContent };
        });
        const data = {
            name: productName.current.value,
            brand: productBrand.current.value,
            price: priceList,
            desc: productDescInput.trim(),
            descImg: productDescImages,
            techParameter: techParameterData,
            mainImg: productMainImageSrc,
            img: productImageSrc,
            status: 1,
            tag: tagList,
        };
        console.log(data);

        const res = await fetch(`/api/products`, {
            method: 'POST',
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
                                                onClick={btnTagHandler(
                                                    slug,
                                                    name
                                                )}
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
                        <h3>Ảnh sản phẩm (ảnh chính)</h3>
                        <div className={styles.fieldGroup}>
                            <div
                                className={styles.product}
                                style={{
                                    backgroundImage: `url("${productImageSrc.src}")`,
                                }}
                            >
                                <div className={styles.imgList}>
                                    {productMainImageSrc && (
                                        <img
                                            src={productMainImageSrc.src}
                                            className={styles.imgItem}
                                        />
                                    )}
                                </div>
                                <div className={styles.options}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id="product-upload-main"
                                        hidden
                                        onChange={handleOnChangeMainImgInput}
                                    />
                                    <label
                                        htmlFor="product-upload-main"
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
                        <h3>Ảnh sản phẩm (ảnh phụ)</h3>
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
export default ProductCreateForm;
