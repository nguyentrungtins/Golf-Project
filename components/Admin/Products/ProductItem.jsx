import classnames from 'classnames';
import styles from './ProductList.module.scss';
import { AiOutlineEdit } from 'react-icons/ai';
import { TbListDetails } from 'react-icons/tb';
const ProductItem = ({ product = {} }) => {
    const { name, tag, brand, price, status } = product;
    let statusName;
    let statusStyle;
    if (status == 1) {
        statusName = 'Còn hàng';
        statusStyle = classnames(styles.status, styles.status_paid);
    } else if (status == 0) {
        statusName = 'Hết hàng';
        statusStyle = classnames(styles.status, styles.status_pending);
    } else if (status == -1) {
        statusName = 'Ngừng kinh doanh';
        statusStyle = classnames(styles.status, styles.status_unpaid);
    }
    return (
        <>
            {product ? (
                <tr>
                    <td>
                        <a href="#">{name}</a>
                    </td>

                    <td>
                        {tag.map((t, index) => {
                            return <p key={index}>{t}</p>;
                        })}
                    </td>
                    <td>{brand}</td>
                    <td>
                        <p className={statusStyle}>{statusName}</p>
                    </td>
                    <td className={styles.amount}>{price.priceAfterSale} đ</td>
                    <td className={styles.edit}>
                        <a>
                            <TbListDetails size={25} />
                        </a>
                        <a>
                            <AiOutlineEdit size={25} />
                        </a>
                    </td>
                </tr>
            ) : (
                <></>
            )}
        </>
    );
};
export default ProductItem;
