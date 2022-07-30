import classnames from 'classnames';
import styles from './ProductList.module.scss';
import { AiOutlineEdit } from 'react-icons/ai';
import { TbListDetails } from 'react-icons/tb';
const ProductItem = () => {
    return (
        <>
            <tr>
                <td>
                    <a href="#">INV__1001</a>
                </td>
                <td>Paragon</td>
                <td>1/5/2021</td>
                <td>
                    <p
                        className={classnames(
                            styles.status,
                            styles.status_unpaid
                        )}
                    >
                        Unpaid
                    </p>
                </td>
                <td className={styles.amount}>520.18đ</td>
                <td className={styles.edit}>
                    <a>
                        <TbListDetails size={25} />
                    </a>
                    <a>
                        <AiOutlineEdit size={25} />
                    </a>
                </td>
            </tr>
            {/* <tr>
                <td>
                    <a href="#">INV__1002</a>
                </td>
                <td>Sonic</td>
                <td>1/4/2021</td>
                <td>
                    <p
                        className={classnames(
                            styles.status,
                            styles.status_paid
                        )}
                    >
                        Paid
                    </p>
                </td>
                <td className={styles.amount}>415.25đ</td>
                <td className={styles.edit}>
                    <a>
                        <TbListDetails size={25} />
                    </a>
                    <a>
                        <AiOutlineEdit size={25} />
                    </a>
                </td>
            </tr>
            <tr>
                <td>
                    <a href="#">INV__1003</a>
                </td>
                <td>Innercircle</td>
                <td>1/2/2021</td>
                <td>
                    <p
                        className={classnames(
                            styles.status,
                            styles.status_pending
                        )}
                    >
                        Pending
                    </p>
                </td>
                <td className={styles.amount}>1324.84đ</td>
                <td className={styles.edit}>
                    <a>
                        <TbListDetails size={25} />
                    </a>
                    <a>
                        <AiOutlineEdit size={25} />
                    </a>
                </td>
            </tr> */}
        </>
    );
};
export default ProductItem;
