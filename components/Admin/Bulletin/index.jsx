import Link from 'next/link';
import styles from './AdminBulletinSection.module.scss';
import ListBulletinCardSection from '../../Bulletin/ListBulletinCardSection';
import Button from '../../Button';
import { BsPlusLg } from 'react-icons/bs';

const AdminBulletinSection = ({ bulletins, slug }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.btnWrap}>
                <Link href="/admin/bulletin/create">
                    <Button leftIcon={<BsPlusLg />}>Tạo tin mới</Button>
                </Link>
            </div>
            <ListBulletinCardSection bulletins={bulletins} />
        </div>
    );
};

export default AdminBulletinSection;
