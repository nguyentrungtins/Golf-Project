import styles from './ProductCreateForm.module.scss';
import Button from '../../Button';
import { IoIosArrowBack } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import { BsUpload } from 'react-icons/bs';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import Link from 'next/link';
import classnames from 'classnames';
import { useState, useRef } from 'react';
import {
    randomString,
    toLowerCaseNonAccentVietnamese,
} from '../../../lib/functions';

const ProductCreateForm = () => {
    const [techParameterList, setTechParameterList] = useState([
        { techParameter: '', techParameterContent: '' },
    ]);

    const textArticleRef = useRef();
    const loadingToast = useRef();
    const productName = useRef('');
    const productType = useRef('');
    const productBrand = useRef('');
    const [productDescInput, setArticleInput] = useState('');
    const [productDescImages, setArticleImages] = useState([]);
    const [productImageSrc, setProductImageSrc] = useState([]);

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
            type: productType.current.value,
            brand: productBrand.current.value,
            desc: productDescInput.trim(),
            descImg: productDescImages,
            techParameter: techParameterData,
            img: productImageSrc,
        };
        console.log(data);

        // const res = await fetch(`/api/products/create`, {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-type': 'application/json',
        //     },
        // });

        // // GET RESULT FROM API
        // const result = await res.json();
        // console.log(result);
        // if (result.success) {
        //     // router.push('/admin/bulletin');

        //     // SHOW SUCCESS TOAST
        //     toast.update(loadingToast.current, {
        //         render: result.message,
        //         type: toast.TYPE.SUCCESS,
        //         autoClose: 5000,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         onClose: () => router.push('/admin/bulletins'),
        //     });
        //     // toast.success(result.message);
        // } else {
        //     // SHOW ERROR TOAST
        //     toast.update(loadingToast.current, {
        //         render: result.message,
        //         type: toast.TYPE.ERROR,
        //         autoClose: 5000,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //     });
        // }
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
                                    htmlFor="productType"
                                >
                                    Danh mục sản phẩm
                                </label>
                                <input
                                    type="text"
                                    id="productType"
                                    placeholder="Gậy golf"
                                    className={styles.input}
                                    name="category"
                                    ref={productType}
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
                    <div className={styles.field}>
                        <h3>Ảnh sản phẩm</h3>
                        <div className={styles.fieldGroup}>
                            <div
                                className={styles.product}
                                style={{
                                    backgroundImage: `url("${productImageSrc.src}")`,
                                }}
                            >
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
                                    <Button forLabel rightIcon={<BsUpload />}>
                                        Chọn ảnh bìa
                                    </Button>
                                </label>
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
