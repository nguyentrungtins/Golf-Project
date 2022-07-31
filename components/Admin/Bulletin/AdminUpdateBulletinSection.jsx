import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styles from './AdminUpdateBulletinSection.module.scss';
import Button from '../../Button';
import { BsUpload } from 'react-icons/bs';

const AdminUpdateBulletinSection = ({ bulletin }) => {
    const textArticleRef = useRef();
    const loadingToast = useRef();

    const [banner, setBanner] = useState(bulletin ? bulletin.banner : {});
    const [titleInput, setTitleInput] = useState(
        bulletin ? bulletin.title : ''
    );
    const [articleInput, setArticleInput] = useState(
        bulletin ? bulletin.article : ''
    );
    const [articleImages, setArticleImages] = useState(
        bulletin ? bulletin.images : []
    );

    // RANDOM STRING FUNCTION
    function randomString() {
        const length = 8;
        const chars =
            '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var i = length; i > 0; --i)
            result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    // ONCHANGE EVENT IN BANNER INPUT
    const handleOnChangeBannerInput = (e) => {
        const file = e.target.files[0];
        if (file && file.type.includes('image')) {
            // READ FILE
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setBanner({
                    src: reader.result,
                });
            };
        }
    };

    // ONCHANGE EVENT IN IMAGE INPUT
    const handleOnChangeImageInput = (e) => {
        const file = e.target.files[0];
        if (file && file.type.includes('image')) {
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
    const handleOnClickUpdateButton = async () => {
        // console.log('>>> bannerImageSrc: ', bannerImageSrc);
        // console.log('>>> titleInput: ', titleInput);
        // console.log('>>> articleInput: ', articleInput);
        // console.log('>>> articleImages: ', articleImages);

        // VALIDATE DATA BEFORE FETCH API
        if (!titleInput) {
            toast.warn('Vui lòng nhập tiêu đề tin');
            return;
        }
        if (!articleInput) {
            toast.warn('Vui lòng nhập nội dung tin');
            return;
        }

        console.log('pass validate');

        // ADD LOADING TOAST FOR HANDLE CALL API
        loadingToast.current = toast.info('Đang xử lý cập nhật tin', {
            autoClose: false,
            closeOnClick: false,
        });

        const data = {
            title: titleInput.trim(),
            article: articleInput.trim(),
            banner: banner,
            images: articleImages,
        };
        console.log(data);

        const res = await fetch(
            `http://localhost:3000/api/bulletin/${bulletin._id.toString()}`,
            {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json',
                },
            }
        );

        // GET RESULT FROM API
        const result = await res.json();
        if (result.success) {
            // SHOW SUCCESS TOAST
            toast.update(loadingToast.current, {
                render: result.message,
                type: toast.TYPE.SUCCESS,
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
            });
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
                style={{
                    backgroundImage: banner.url
                        ? `url("${banner.url}")`
                        : `url("${banner.src}")`,
                }}
            >
                <input
                    type="file"
                    accept="image/*"
                    id="banner-upload"
                    hidden
                    onChange={handleOnChangeBannerInput}
                />
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
                    <Button forLabel>Chèn ảnh</Button>
                </label>
                <Button onClick={handleOnClickUpdateButton}>
                    Cập nhật tin
                </Button>
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

export default AdminUpdateBulletinSection;
