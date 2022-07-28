import { useState } from 'react';
import styles from './AdminCreateNewSection.module.scss';
import Button from '../../Button';
import { BsUpload } from 'react-icons/bs';

const AdminCreateNewSection = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.banner}>
                <input type="file" accept="image/*" id="banner-upload" hidden />
                <label htmlFor="banner-upload" className={styles.btn}>
                    <Button forLabel>
                        <BsUpload />
                    </Button>
                </label>
            </div>

            <div className={styles.content}>
                <textarea
                    type="text"
                    className={styles.title}
                    placeholder="Tiêu đề ..."
                ></textarea>
                <textarea
                    type="text"
                    className={styles.article}
                    placeholder="Nội dung ..."
                ></textarea>
            </div>

            <div className={styles.options}>
                <input type="file" accept="image/*" id="image-upload" hidden />
                <label htmlFor="image-upload" className={styles.btn}>
                    <Button forLabel>Chèn ảnh</Button>
                </label>
                <Button>Tạo tin</Button>
            </div>
        </div>
    );
};

export default AdminCreateNewSection;
