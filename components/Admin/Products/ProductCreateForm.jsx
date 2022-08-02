import styles from './ProductCreateForm.module.scss';
import Button from '../../Button';
import { IoIosArrowBack } from 'react-icons/io';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import Link from 'next/link';
import classnames from 'classnames';
import { useState } from 'react';
const ProductCreateForm = () => {
    const [techParameterList, setTechParameterList] = useState([
        { techParameter: '', techParameterContent: '' },
    ]);

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

    const onSubmit = (e) => {
        // e.preventDefault();
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
                                    className={styles.input}
                                    name="name"
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
                                    className={styles.input}
                                    name="category"
                                />
                            </div>
                            <div className={styles.formControl}>
                                <label
                                    className={styles.label}
                                    htmlFor="productProvider"
                                >
                                    Nhà cung cấp
                                </label>
                                <input
                                    type="text"
                                    id="productProvider"
                                    className={styles.input}
                                    name="provider"
                                />
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
                                <textarea />
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

                    {/* <label htmlFor="techParameter">TechParameter(s)</label>
                    {techParameterList.map((singleTechParameter, index) => (
                        <div key={index} className="techParameters">
                            <div className="first-division">
                                <input
                                    name="techParameter"
                                    type="text"
                                    id="techParameter"
                                    value={singleTechParameter.techParameter}
                                    onChange={(e) =>
                                        handleTechParameterChange(e, index)
                                    }
                                    required
                                />
                                {techParameterList.length - 1 === index &&
                                    techParameterList.length < 4 && (
                                        <button
                                            type="button"
                                            onClick={handleTechParameterAdd}
                                            className="add-btn"
                                        >
                                            <span>Add a TechParameter</span>
                                        </button>
                                    )}
                            </div>
                            <div className="second-division">
                                {techParameterList.length !== 1 && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleTechParameterRemove(index)
                                        }
                                        className="remove-btn"
                                    >
                                        <span>Remove</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))} */}

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};
export default ProductCreateForm;
