import styles from './ProductList.module.scss';
import classnames from 'classnames';
import Button from '../../Button';
import ProductItem from './ProductItem';
import Link from 'next/link';
import { BsPlusLg } from 'react-icons/bs';

const ProductList = () => {
    return (
        <div className={styles.wrapper}>
            <h2>Sản phẩm</h2>
            <div className={styles.btnWrap}>
                <Link href="/admin/products/create">
                    <Button leftIcon={<BsPlusLg />}>Thêm Sản Phẩm</Button>
                </Link>
            </div>
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
