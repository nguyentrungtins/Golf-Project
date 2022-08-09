import classnames from 'classnames';
import styles from './ProductList.module.scss';
import { AiOutlineEdit } from 'react-icons/ai';
import { TbListDetails } from 'react-icons/tb';
import Link from 'next/link';
const ProductItem = ({ product = null }) => {
    if (!product) {
        return (
            <tr>
                <td>
                    <h4>Không tồn tại sản phẩm nào</h4>
                </td>
            </tr>
        );
    }
    const { name, tag, brand, price, status, _id } = product;
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
            <tr>
                <td>
                    <a href="#">{name}</a>
                </td>

                <td>
                    {tag.map((t, index) => {
                        return <p key={index}>{t.name}</p>;
                    })}
                </td>
                <td>{brand}</td>
                <td>
                    <p className={statusStyle}>{statusName}</p>
                </td>
                <td className={styles.amount}>{price.priceAfterSale} đ</td>
                <td className={styles.edit}>
                    <Link href={`/admin/products/detail/${_id}`}>
                        <a>
                            <TbListDetails size={25} />
                        </a>
                    </Link>
                    <Link href={`/admin/products/edit/${_id}`}>
                        <a>
                            <AiOutlineEdit size={25} />
                        </a>
                    </Link>
                </td>
            </tr>
        </>
    );
};
export default ProductItem;
