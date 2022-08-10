import Link from 'next/link';
import styles from './AdminBulletinSection.module.scss';
import ListBulletinCardCol3Section from '../../Bulletin/ListBulletinCardCol3Section';
import Button from '../../Button';
import { BsPlusLg } from 'react-icons/bs';

const AdminBulletinSection = ({ bulletins = [] }) => {
    return (
        <div className={styles.wrapper}>
            <h2>Quản lý tin tức</h2>
            <div className={styles.btnWrap}>
                <Link href="/admin/bulletins/create">
                    <Button leftIcon={<BsPlusLg />}>Tạo tin mới</Button>
                </Link>
            </div>
            <ListBulletinCardCol3Section bulletins={bulletins} />
        </div>
    );
};

export default AdminBulletinSection;
