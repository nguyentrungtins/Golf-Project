import styles from './ProductList.module.scss';
import classnames from 'classnames';
import { AiOutlineEdit } from 'react-icons/ai';
import { TbListDetails } from 'react-icons/tb';
import ProductItem from './ProductItem';
const ProductList = () => {
    return (
        <div className={styles.wrapper}>
            <h2>Sản phẩm</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Tên Sản Phẩm</th>
                        <th>Phân Loại</th>
                        <th>Hãng Sản Xuất</th>
                        <th>Status</th>
                        <th className={styles.amount}>Đơn giá</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductItem />
                </tbody>
            </table>
        </div>
    );
};
export default ProductList;
