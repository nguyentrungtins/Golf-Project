import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AdminNewDetailSection.module.scss';
import Button from '../../Button';
import { BiArrowBack, BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import Modal from '../../Modal';

const AdminNewDetailSection = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.actions}>
                <Link href="/admin/news">
                    <Button forIcon>
                        <BiArrowBack />
                    </Button>
                </Link>
                <div>
                    <Link href="/admin/news/update">
                        <Button forIcon>
                            <BiEditAlt />
                        </Button>
                    </Link>
                    <Button forIcon onClick={() => setShowModal(true)}>
                        <AiOutlineDelete />
                    </Button>
                </div>
            </div>
            <h1 className={styles.title}>
                Extraordinary Attorney Woo: Cô luật sư tự kỷ giành 24 triệu giờ
                xem trên Netflix
            </h1>
            <p className={styles.published}>
                <span>28/7/2022</span>
            </p>
            <div className={styles.banner}>
                <Image
                    src="/images/news/1.jpg"
                    alt="image"
                    width={128}
                    height={72}
                    layout="responsive"
                />
            </div>
            <div className={styles.article}>
                <p>
                    Extraordinary Attorney Woo (Nữ luật sư kỳ lạ Woo Young Woo)
                    của đạo diễn Yoo In Sik là bộ phim Hàn đang hot nhất hiện
                    nay với rất nhiều thành tích ấn tượng.
                </p>
                <h1>
                    Extraordinary Attorney Woo (Nữ luật sư kỳ lạ Woo Young Woo)
                </h1>
                <p>
                    Với 8 trên tổng số 16 tập được phát sóng, bộ phim có tỷ lệ
                    người xem cao nhất lên tới 13,1% - đứng đầu các tác phẩm
                    cùng khung giờ phát sóng của đài ENA. Phim cũng đứng đầu
                    danh sách Top 10 tác phẩm không nói tiếng Anh của Netflix,
                    với gần 24 triệu giờ xem.
                </p>
                <div>
                    <Image
                        src="/images/news/1.jpg"
                        alt="image"
                        width={128}
                        height={72}
                        layout="responsive"
                    />
                </div>
            </div>
            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                title="Xác nhận xóa tin"
            >
                n tổng số 16 tập được phát sóng, bộ phim có tỷ lệ người xem cao
                nhất lên tới 13,1% - đứng đầu các tác phẩm cùng khung giờ phát
                sóng của đài ENA. Phim cũng đứng đầu danh sách Top 10 tác phẩm
                không nói tiếng Anh của Netflix, với gần 24
            </Modal>
        </div>
    );
};

export default AdminNewDetailSection;
