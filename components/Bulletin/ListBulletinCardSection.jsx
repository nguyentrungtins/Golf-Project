import Image from 'next/image';
import styles from './ListBulletinCardSection.module.scss';

const ListBulletinCardSection = ({ bulletins }) => {
    return (
        <div className={styles.row}>
            {bulletins.map((bulletin) => (
                <div className={styles.col3} key={bulletin._id}>
                    <div className={styles.imageWrap}>
                        <Image
                            src={bulletin.banner}
                            alt="News Latest Section Image"
                            width={768}
                            height={432}
                            layout="responsive"
                        />
                    </div>
                    <h3>{bulletin.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default ListBulletinCardSection;
