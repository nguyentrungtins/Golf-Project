import Link from 'next/link';
import Image from 'next/image';
import styles from './ListBulletinCardSection.module.scss';

const ListBulletinCardSection = ({ bulletins = [], useSlug = false }) => {
    return (
        <div className={styles.row}>
            {bulletins.map((bulletin) => (
                <Link
                    href={
                        useSlug
                            ? `/bulletins/${bulletin.slug.toString()}`
                            : `/admin/bulletins/${bulletin._id.toString()}`
                    }
                    key={bulletin._id.toString()}
                >
                    <div className={styles.col3}>
                        <div className={styles.imageWrap}>
                            {bulletin.banner.url && (
                                <Image
                                    src={bulletin.banner.url}
                                    alt="News Latest Section Image"
                                    width={768}
                                    height={432}
                                    layout="responsive"
                                />
                            )}
                        </div>
                        {bulletin.title && <h3>{bulletin.title}</h3>}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ListBulletinCardSection;
