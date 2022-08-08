import Image from 'next/image';
import Link from 'next/link';
import { BiBookmark } from 'react-icons/bi';
import Button from '../Button';
import styles from './ListBulletinsCardCol6Section.module.scss';

const ListBulletinsCardCol6Section = ({ bulletins = [] }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.row}>
                {bulletins.map((bulletin) => (
                    <Link
                        href={`/tin-tuc/${bulletin.slug.toString()}`}
                        key={bulletin._id.toString()}
                    >
                        <div className={styles.col6}>
                            <div className={styles.imageWrap}>
                                <Image
                                    src={bulletin.banner.url}
                                    alt="News Latest Section Image"
                                    width={768}
                                    height={432}
                                    layout="responsive"
                                />
                            </div>
                            <div className={styles.content}>
                                {bulletin.title && <h3>{bulletin.title}</h3>}
                                <Button circle sm gtheme>
                                    <BiBookmark />
                                </Button>
                            </div>
                            <div className={styles.blur}></div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ListBulletinsCardCol6Section;
