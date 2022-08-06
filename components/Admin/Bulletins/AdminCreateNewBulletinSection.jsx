import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import styles from './AdminCreateNewBulletinSection.module.scss';
import Button from '../../Button';
import { BsUpload } from 'react-icons/bs';
import {
    randomString,
    toLowerCaseNonAccentVietnamese,
} from '../../../lib/functions';

const AdminCreateNewBulletinSection = () => {
    const router = useRouter();
    const textArticleRef = useRef();
    const loadingToast = useRef();

    const [bannerImageSrc, setBannerImageSrc] = useState({});
    const [titleInput, setTitleInput] = useState('');
    const [articleInput, setArticleInput] = useState('');
    const [articleImages, setArticleImages] = useState([]);

    // ONCHANGE EVENT IN BANNER INPUT
    const handleOnChangeBannerInput = (e) => {
        const file = e.target.files[0];
        // console.log(file.size);

        // CHECK FILE TYPE
        if (file && file.type.includes('image')) {
            // CHECK FILE SIZE (< 10MB)
            if (file.size > 10 * 1024 * 1024) {
                toast.warn(
                    'Kích thước file vượt quá kích thước cho phép (< 10MB)'
                );
                return;
            }

            // READ FILE
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setBannerImageSrc({
                    src: reader.result,
                });
            };
            reader.onerror = () => {
                console.error('AHHHHHHHH!!');
                setErrMsg('something went wrong!');
            };
        }
    };

    // ONCHANGE EVENT IN IMAGE INPUT
    const handleOnChangeImageInput = (e) => {
        const file = e.target.files[0];
        if (file && file.type.includes('image')) {
            // CHECK FILE SIZE (< 10MB)
            if (file.size > 10 * 1024 * 1024) {
                toast.warn(
                    'Kích thước file vượt quá kích thước cho phép (< 10MB)'
                );
                return;
            }

            // SET IMAGE NAME
            let date = new Date();
            let imageName =
                date.getDate() + date.getTime() + randomString() + file.name;

            // READ FILE
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setArticleImages((prev) => [
                    ...prev,
                    { name: imageName, src: reader.result },
                ]);
            };
            reader.onerror = () => {
                console.error('AHHHHHHHH!!');
                setErrMsg('something went wrong!');
            };

            // CHANGE STATE OF ARTICLE INPUT VALUE
            const curPos = textArticleRef.current.selectionStart;
            const textToInsert = `\n!Image[${imageName}]\n`;
            setArticleInput(
                (prev) =>
                    prev.slice(0, curPos) + textToInsert + prev.slice(curPos)
            );
        }
    };

    // ONCLICK EVENT ON CREATE BUTTON (SUBMIT)
    const handleOnClickCreateButton = async () => {
        // console.log('>>> bannerImageSrc: ', bannerImageSrc);
        // console.log('>>> titleInput: ', titleInput);
        // console.log('>>> articleInput: ', articleInput);
        // console.log('>>> articleImages: ', articleImages);

        // VALIDATE DATA BEFORE FETCH API
        if (!bannerImageSrc.src) {
            toast.warn('Vui lòng chọn ảnh bìa');
            return;
        }
        if (!titleInput) {
            toast.warn('Vui lòng nhập tiêu đề tin');
            return;
        }
        if (!articleInput) {
            toast.warn('Vui lòng nhập nội dung tin');
            return;
        }

        console.log('pass validate');

        // CREATE SLUG
        let slug = titleInput.split(' ').join('-') + '-' + randomString();
        slug = toLowerCaseNonAccentVietnamese(slug).replace(
            /[^0-9a-zA-Z\-]/g,
            ''
        );

        // ADD LOADING TOAST FOR HANDLE CALL API
        loadingToast.current = toast.info('Đang xử lý tạo tin mới', {
            autoClose: false,
            closeOnClick: false,
        });

        const data = {
            title: titleInput.trim(),
            article: articleInput.trim(),
            banner: bannerImageSrc,
            images: articleImages,
            slug: slug.trim(),
        };

        const res = await fetch(`/api/bulletins`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            },
        });

        // GET RESULT FROM API
        const result = await res.json();
        console.log(result);
        if (result.success) {
            // router.push('/admin/bulletin');

            // SHOW SUCCESS TOAST
            toast.update(loadingToast.current, {
                render: result.message,
                type: toast.TYPE.SUCCESS,
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                onClose: () => router.push('/admin/bulletins'),
            });
            // toast.success(result.message);
        } else {
            // SHOW ERROR TOAST
            toast.update(loadingToast.current, {
                render: result.message,
                type: toast.TYPE.ERROR,
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    };

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.banner}
                style={{ backgroundImage: `url("${bannerImageSrc.src}")` }}
            >
                <input
                    type="file"
                    accept="image/*"
                    id="banner-upload"
                    hidden
                    onChange={handleOnChangeBannerInput}
                />
                <label htmlFor="banner-upload" className={styles.btn}>
                    <Button forLabel rightIcon={<BsUpload />}>
                        Chọn ảnh bìa
                    </Button>
                </label>
            </div>

            <div className={styles.content}>
                <textarea
                    type="text"
                    className={styles.title}
                    placeholder="Tiêu đề ..."
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                ></textarea>
                <textarea
                    ref={textArticleRef}
                    type="text"
                    className={styles.article}
                    placeholder="Nội dung ..."
                    value={articleInput}
                    onChange={(e) => setArticleInput(e.target.value)}
                ></textarea>
            </div>

            <div className={styles.options}>
                <input
                    type="file"
                    accept="image/*"
                    id="image-upload"
                    hidden
                    onChange={handleOnChangeImageInput}
                />
                <label htmlFor="image-upload" className={styles.btn}>
                    <Button forLabel rightIcon={<BsUpload />}>
                        Chèn ảnh
                    </Button>
                </label>
                <Button onClick={handleOnClickCreateButton}>Tạo tin</Button>
                <ToastContainer
                    position="bottom-right"
                    theme="colored"
                    autoClose={5000}
                    hideProgressBar={false}
                    closeOnClick
                    pauseOnHover
                />
            </div>
        </div>
    );
};

export default AdminCreateNewBulletinSection;
