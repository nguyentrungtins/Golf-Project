import Link from 'next/link';
import styles from './AdminNewsSection.module.scss';
import ListNewsCardSection from '../../News/ListNewsCardSection';
import Button from '../../Button';
import { BsPlusLg } from 'react-icons/bs';

const AdminNewsSection = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.btnWrap}>
                <Link href="/admin/news/create-new">
                    <Button leftIcon={<BsPlusLg />}>Tạo tin mới</Button>
                </Link>
            </div>
            <ListNewsCardSection />
        </div>
    );
};

export default AdminNewsSection;
