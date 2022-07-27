import styles from './AdminNewsSection.module.scss';
import ListNewsCardSection from '../../News/ListNewsCardSection';

const AdminNewsSection = () => {
    return (
        <div className={styles.wrapper}>
            <ListNewsCardSection />
        </div>
    );
};

export default AdminNewsSection;
