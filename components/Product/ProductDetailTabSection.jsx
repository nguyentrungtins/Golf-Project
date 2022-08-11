import { useState, useRef, useEffect } from 'react';
import styles from './ProductDetailTabSection.module.scss';
import classnames from 'classnames';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

const ProductDetailTabSection = ({ product = {} }) => {
    const { desc, descImg, techParameter } = product;
    const [showMore, setShowMore] = useState(false);
    const articleRef = useRef();

    const techParameterStyle = classnames(
        styles.article,
        showMore ? styles.click : ''
    );

    const showClickHandler = () => {
        setShowMore(!showMore);
    };
    // SET CONTENT OF ARTICLE
    useEffect(() => {
        let articleContent = '';
        if (desc) {
            const splitArticle = desc.split('\n').filter((item) => item !== '');
            splitArticle.forEach((item) => {
                // CHECK HEADING
                if (item[0] === '#') {
                    let count = 1;
                    while (item[count] === '#') {
                        count += 1;
                    }

                    articleContent += `
                        <h${count}>${item.slice(count, item.length)}</h${count}>
                    `;
                }
                // CHECK IMAGE
                else if (item.startsWith('!Image')) {
                    const imageName = item.slice(7, item.length - 1);

                    const image = product.descImg.find(
                        (item) => item.name === imageName
                    );
                    if (image) {
                        articleContent += `
                            <div>
                                <img
                                    src=${image.url}
                                    alt="image"
                                />
                            </div>
                        `;
                    }
                } else {
                    articleContent += `<p>${item}</p>`;
                }
            });

            articleRef.current.innerHTML = articleContent;
        }
    }, [desc, product]);
    const [activedTab, setActivedTab] = useState(1);

    const handleClick = (event) => {
        const value = parseInt(event.target.dataset.value);
        setActivedTab(value);
    };
    const contentStyles = [
        styles.content,
        activedTab === 1 && styles.active,
    ].join(' ');
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {/* TABS */}
                <ul>
                    <li
                        className={activedTab === 1 ? styles.active : undefined}
                        data-value={1}
                        onClick={(e) => handleClick(e)}
                    >
                        Mô tả sản phẩm
                    </li>
                    <li
                        className={activedTab === 2 ? styles.active : undefined}
                        data-value={2}
                        onClick={(e) => handleClick(e)}
                    >
                        Thông số kỹ thuật
                    </li>
                </ul>

                {/* CONTENT */}
                <div className={contentStyles}>
                    <div className={techParameterStyle} ref={articleRef}></div>
                    <span
                        className={showMore ? styles.click : ''}
                        onClick={showClickHandler}
                    >
                        {!showMore ? 'Xem Thêm' : 'Thu gọn'}

                        {!showMore ? (
                            <BsChevronCompactDown />
                        ) : (
                            <BsChevronCompactUp />
                        )}
                    </span>
                    {/* <div className={styles.opacity}></div> */}
                </div>
                <div
                    className={[
                        styles.content,
                        activedTab === 2 && styles.active,
                    ].join(' ')}
                >
                    <table border="1">
                        <tbody>
                            {techParameter &&
                                techParameter.map((parameter, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{parameter.title}</th>
                                            <td>{parameter.body}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailTabSection;
